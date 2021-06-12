<template>
    <div class="page-content" style="padding-top: 100px">

        <spinner-component v-if="loading"></spinner-component>

        <modal-widget v-if="durationModal">
            <div class="card-header">
                <h4>Workout Entry</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="duration">Duration (minutes)</label>
                    <input required v-model="duration" class="form-control" type="number" name="duration" id="duration">
                </div>
                <div class="form-group">
                    <button type="button" @click="addDate('Yes')" class="btn btn-sm btn-dark">Submit</button>
                    <button type="button" @click="durationModal=false" class="btn btn-sm btn-danger">Close</button>
                </div>
            </div>

        </modal-widget>

        <modal-widget v-if="durationModal_another_date">
            <div class="card-header">
                <h4>Workout Entry</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="date">Date</label>
                    <input required type="datetime-local" v-model="date" class="form-control" id="date">
                </div>
                <div class="form-group">
                    <label for="duration-date">Duration (minutes)</label>
                    <input required v-model="duration" class="form-control" type="number" name="duration" id="duration-date">
                </div>
                <div class="form-group">
                   <p>Did you met your goal?</p>
                    <div class="form-check">
                        <input required class="form-check-input" type="radio" name="flexRadioDefault" v-model="met_goal" value="Yes" id="flexRadioDefault1" checked>
                        <label class="form-check-label" for="flexRadioDefault1">
                           YES
                        </label>
                    </div>
                    <div class="form-check">
                        <input required class="form-check-input" type="radio" name="flexRadioDefault" v-model="met_goal" value="No" id="flexRadioDefault2" >
                        <label class="form-check-label" for="flexRadioDefault2">
                           NO
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <button type="button" @click="addDateManual()" class="btn btn-sm btn-dark">Submit</button>
                    <button type="button" @click="durationModal_another_date=false" class="btn btn-sm btn-danger">Close</button>
                </div>
            </div>

        </modal-widget>

        <div class="container mt-4 mb-3">
<!--            <div>-->
<!--                <h3>Workout Routines</h3>-->
<!--            </div>-->
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
                            <button @click="openDurationModal" class="btn btn-primary">Yes</button>
                            <button @click="addDate('No')" class="btn btn-secondary">No</button>
                        </div>
                        <div class="card-footer pl-4" v-if="entry">
                            <p>Add another date?</p>
                            <button class="btn btn-sm btn-primary" @click="durationModal_another_date = true">Yes</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h3>History</h3>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Duration</th>
<!--                                    <th scope="col">Time</th>-->
                                    <th scope="col">Met Goal</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(d,index) in workout.dates" :key="index">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ new Date(d).format('mm/dd/yyyy') }}
                                    </td>
                                    <td>{{ workout.duration[index] }} mins</td>
<!--                                    <td>{{ new Date(d).getHours() + ":" + new Date(d).getMinutes() }}</td>-->
                                    <td v-if="workout.met_goal[index] === 'No'" class="text-danger font-weight-bold">{{
                                        workout.met_goal[index] }}
                                    </td>
                                    <td v-if="workout.met_goal[index] === 'Yes'" class="text-success font-weight-bold">
                                        {{ workout.met_goal[index] }}
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                            <p v-if="workout.dates.length === 0">No records so far.</p>
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
    import ModalWidget from "../components/ModalWidget";
    import cache from "../services/cache";
    import SpinnerComponent from "../components/SpinnerComponent";

    export default {
        components: {SpinnerComponent, ModalWidget},
        data() {
            return {
                mode: 0,
                workout: {
                    meta: {
                        workouts: 0,
                        minutes: 0
                    },
                    met_goal: []
                },
                entry: false,
                date: new Date(),
                duration: 20,
                met_goal: 'Yes',
                loading: false,

                attrs: [],
                durationModal: false,
                durationModal_another_date: false
            }
        },
        methods: {
            startWorkout() {
                workout.setWorkoutGoal({
                    'workouts': this.workout.meta.workouts,
                    'minutes': this.workout.meta.minutes
                }).then(() => location.reload())
            },
            setMode(mode) {
                cache.store("workout_mode", mode)
                this.mode = mode
            },
            submitWorkout(e) {
                e.preventDefault()
            },
            openDurationModal() {
                this.durationModal = true
            },
            async addDate(goal = 'Yes') {

                if (this.duration === '' || this.duration === null){
                    return;
                }

                if (this.workout.dates === null || this.workout.dates === '') {
                    await workout.addDate([new Date().toJSON()], [this.duration], [goal])
                } else {
                    if (this.workout.dates) {
                        this.workout.dates.push(new Date().toJSON())
                        this.workout.duration.push(this.duration)
                        this.workout.met_goal.push(goal)
                    } else {
                        this.workout.dates = [new Date().toJSON()]
                        this.workout.duration.push(this.duration)
                        this.workout.met_goal.push(goal)
                    }
                    await workout.addDate(this.workout.dates, this.workout.duration, this.workout.met_goal)
                }

                this.entry = true
                this.durationModal = false
                location.reload()

            },
            async loadWorkout() {
                let temp = (await workout.getWorkout()).data

                if (temp.meta === '' || temp.meta === null) {
                    this.setMode(0)
                } else {
                    this.workout = temp

                    this.setMode(2)
                    let last_day = new Date(this.workout.dates[this.workout.dates.length - 1])
                    if (new Date().toDateString() === last_day.toDateString()) {
                        this.entry = true
                    }

                    this.dateUIBuild()

                }
            },
            reset() {
                workout.reset().then(() => {
                    this.setMode(0)
                    location.reload()
                })
            },
            dateUIBuild() {
                this.loading = true
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

                this.loading = false

                this.attrs = res
            },
            addDateManual(){

                if (this.duration === '' || this.duration === null){
                    return;
                }

                this.workout.dates.push(this.date)
                this.workout.duration.push(this.duration)
                this.workout.met_goal.push(this.met_goal)

                for (let i=this.workout.dates.length - 1; i >= 0; i--){
                   if (new Date(this.workout.dates[i]).getTime() < new Date(this.workout.dates[i-1]).getTime()){
                       let temp = this.workout.dates[i-1]
                       this.workout.dates[i-1] = this.workout.dates[i]
                       this.workout.dates[i] = temp

                       temp = this.workout.duration[i-1]
                       this.workout.duration[i-1] = this.workout.duration[i]
                       this.workout.duration[i] = temp

                       temp = this.workout.met_goal[i-1]
                       this.workout.met_goal[i-1] = this.workout.met_goal[i]
                       this.workout.met_goal[i] = temp
                   }else{
                       break
                   }
                }

                workout
                    .addDate(this.workout.dates, this.workout.duration, this.workout.met_goal)
                    .then(() => {
                        this.durationModal_another_date = false
                        location.reload()
                    })


            }
        },
        async created() {
            if (!auth.isLogged()) {
                await this.$router.push('/login')
            }

            if (cache.isExist('workout_mode')){
                this.setMode(cache.get('workout_mode'))
            }

            await this.loadWorkout()

        }
    }

</script>
