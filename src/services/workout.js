import Api from "../modules/Api";

export default {
    async getWorkout(){
        try {
            let response = await Api.get('/goals/workout')
            return response.data
        }catch (e) {
            console.error(e)
        }

    },

    async setWorkoutGoal(goal){
        try {
            let response = await Api.post('/goals/workout/set', {
                'goal': goal
            })
            return response.data
        }catch(e){
            console.error(e)
        }
    },

    async reset(){
        try {
            let response = await Api.delete('/goals/workout/clear')
            return response.data
        }catch(e){
            console.error(e)
        }
    },

    async addDate(dates){
        try {
            let response = await Api.post('/goals/workout/add', {
                'dates': dates
            })

            return response.data
        }catch(e){
            console.error(e)
        }
    }
}
