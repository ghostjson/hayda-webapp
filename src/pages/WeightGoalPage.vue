<template>
    <div class="page-content">

        <div class="modal fade" id="setGoal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Set a weight goal</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="goal_weight">Set Weight Goal</label>
                            <input type="number" class="form-control" v-model="goal_weight" id="goal_weight">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="setGoal"  data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addWeight" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="">Add current weight</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="add_weight">Add your current weight</label>
                            <input type="number" class="form-control" v-model="add_weight" id="add_weight">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addWeight"  data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="container mt-4">
            <div>
                <h3>Weight Goals</h3>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-sm btn-dark" data-toggle="modal" data-target="#setGoal">Reset your weight
                            goal
                        </button>
                        <button class="btn btn-sm btn-dark" data-toggle="modal" data-target="#addWeight">Add current weight</button>
                    </div>
                </div>
                <div class="row mt-3" v-if="initial_weight !== -1">
                    <div class="col">
                        <p><span class="font-weight-600">Starting Weight</span>: {{ initial_weight }} lbs</p>
                        <p><span class="font-weight-600">Current Weight</span>: {{ current_weight }} lbs</p>
                        <p><span class="font-weight-600">Goal Weight</span>: {{ goal_weight }} lbs</p>
                    </div>
                </div>
                <div class="row" style="height: 30vh; display: flex; align-items: center">
                    <div class="col">
                        <div class="progress" style="height: 30px;">
                            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                 role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
                                 style="height: 30px" v-bind:style="{ width: percentageComplete }">
                                {{ percentageComplete }}
                            </div>

                        </div>
                        <div class="start">Start</div>
                        <div class="end">End</div>
                    </div>
                </div>
                <div class="row mb-5">
                    <h3>Entries</h3>
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Weight (lbs)</th>
                            <th scope="col">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(weight,index) in weights" :key="index">
                            <th scope="row">{{ index }}</th>
                            <td>{{ weight.weight }}</td>
                            <td>{{ weight.date }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .progress {
        margin-bottom: 0;
    }

    .start {
        float: left;
    }

    .end {
        float: right;
        text-align: right;
    }
</style>

<script>

    import auth from "../services/auth";
    import weight from "../services/weight";

    export default {

        data() {
            return {
                weights: {},
                goal_weight: 0,
                add_weight: 110,
                percentageComplete: '50%',
                current_weight: -1,
                initial_weight: -1
            }
        },
        methods: {
            async getWeights() {
                let weights_data = await weight.getWeight()

                this.goal_weight = weights_data.goal



                if (weights_data.data !== null && weights_data.data.length) {
                    console.log(weights_data)

                    this.current_weight = weights_data.data[weights_data.data.length - 1].weight
                    this.initial_weight = weights_data.data[0].weight
                    this.weights = weights_data.data
                }
            },
            setGoal(){
                weight.setGoalWeight(this.goal_weight)
                .then(() => location.reload())
            },
            addWeight(){
                weight.addWeight(this.add_weight)
                .then(() => location.reload())
            },
            percentageCalculation(){
                try{
                    let initial_weight = this.weights[0].weight
                    let final_weight = this.weights[this.weights.length - 1].weight

                    let percentage = ((initial_weight - final_weight) / (initial_weight - this.goal_weight)) * 100

                    if(percentage < 0 || initial_weight === null){
                        percentage = 0
                    }
                    this.percentageComplete = percentage.toFixed(2) + '%'
                }catch (e) {
                    this.percentageComplete = '0%'
                }

            }
        },

        async created() {
            if (!auth.isLogged()) {
                await this.$router.push('/login')
            }

            await this.getWeights()

            this.percentageCalculation()
        }
    }

</script>
