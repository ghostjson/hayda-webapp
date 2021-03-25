<template>
    <div class="page-content">


        <div class="container mt-4 mb-3">
            <div>
                <h3>Workout Routines</h3>
            </div>
            <div class="row mt-5" v-if="mode === 0">
                <div class="col-md-6 workout-right">
                    <div class="pr-5">
                        <blockquote>
                            Do something today that your future self will thank you for
                        </blockquote>
                    </div>
                    <div>
                        <button class="btn btn-primary" @click="mode++">Start workout routine</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="../assets/ill/workout.svg" style="width: inherit;">
                </div>
            </div>
            <div class="row mt-5" v-if="mode === 1">
                <div class="col-md-6">
                    <form @submit="submitWorkout">
                        <div class="form-group">
                            <label for="workouts">Workouts/Week</label>
                            <input type="number" v-model="workout.meta.workouts" required class="form-control"
                                   id="workouts">
                        </div>
                        <div class="form-group">
                            <label for="minutes">Minutes/Workout</label>
                            <input type="number" v-model="workout.meta.minutes" required class="form-control"
                                   id="minutes">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" @click="startWorkout">Start Workout</button>
                        </div>
                    </form>

                </div>
            </div>
            <div class="row mt-5" v-if="mode === 2">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3>Workout Routines
                                <button @click="reset" class="btn btn-sm badge-light">Reset</button>
                            </h3>
                        </div>
                        <div class="card-body">
                            <table>
                                <tr>
                                    <th>Workouts/Week</th>
                                    <td> : {{ workout.meta.workouts }}</td>
                                </tr>
                                <tr>
                                    <th>Minutes/Workout</th>
                                    <td> : {{ workout.meta.minutes }}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="card-footer pl-4" v-if="!entry">
                            <p>Did you meet today's goals?</p>
                            <button @click="addDate" class="btn btn-primary">Yes</button>
                            <button @click="entry = true" class="btn btn-secondary">No</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3>Entries</h3>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(d,index) in workout.dates" :key="index">
                                    <th scope="row">{{ index }}</th>
                                    <td>{{ new Date(d).getDate() + "/" + new Date(d).getMonth() + "/" + new Date(d).getFullYear() }}</td>
                                    <td>{{ new Date(d).getHours() + ":" + new Date(d).getMinutes() }}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3>History</h3>
                        </div>
                        <div class="card-body">
                            <v-calendar is-expanded :attributes="attrs"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .workout-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    blockquote {
        font-size: 1.8em;
        font-weight: 600;
        line-height: 28px;
    }
</style>

<script>

    import workout from "../services/workout";
    import auth from "../services/auth";

    export default {

        data() {
            return {
                mode: 0,
                workout: {
                    meta: {
                        workouts: 0,
                        minutes: 0
                    }
                },
                entry: false,

                attrs: []
            }
        },
        methods: {
            startWorkout() {
                workout.setWorkoutGoal({
                    'workouts': this.workout.meta.workouts,
                    'minutes': this.workout.meta.minutes
                }).then(() => this.setMode(2))
            },
            setMode(mode) {
                this.mode = mode
            },
            submitWorkout(e) {
                e.preventDefault()
            },
            async addDate() {

                if (this.workout.dates === null || this.workout.dates === '') {
                    await workout.addDate([new Date().toJSON()])
                } else {
                    if (this.workout.dates) {
                        this.workout.dates.push(new Date().toJSON())
                    } else {
                        this.workout.dates = [new Date().toJSON()]
                    }
                    await workout.addDate(this.workout.dates)
                }

                this.entry = true
                location.reload()

            },
            async loadWorkout() {
                let temp = (await workout.getWorkout()).data
                if (temp.meta === '' || temp.meta === null) {
                    this.setMode(0)
                } else {
                    this.workout = temp

                    // console.log(new Date(this.workout.dates[1]).get)
                    this.setMode(2)
                    let last_day = new Date(this.workout.dates[this.workout.dates.length - 1])
                    if (new Date().toDateString() === last_day.toDateString()) {
                        this.entry = true
                    }

                    this.dateUIBuild()

                }
            },
            reset() {
                workout.reset().then(() => this.setMode(0))
            },
            dateUIBuild() {
                let res = []
                for (let i = 0; i < this.workout.dates.length; i++) {
                    res.push({
                        key: `date${i}`,
                        bar: {
                            color: 'red',
                            fillMode: 'outline',
                        },
                        dates: this.workout.dates[i]
                    })
                }

                this.attrs = res
            }
        },
        async created() {
            if (!auth.isLogged()) {
                await this.$router.push('/login')
            }

            await this.loadWorkout()

        }
    }

</script>
