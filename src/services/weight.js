import Api from "../modules/Api";

export default {
    async getWeight(){
        try {
            let response = await Api.get('/goals/weight')
            return response.data
        }catch (e) {
            console.error(e)
        }

    },

    async setGoalWeight(weight){
        try {
            let response = await Api.post('/goals/weight/set', {
                'weight': weight
            })

            return response.data
        }catch(e){
            console.error(e)
        }
    },

    async addWeight(weight){
        try {
            let response = await Api.post('/goals/weight/add', {
                'weight': weight
            })

            return response.data
        }catch(e){
            console.error(e)
        }
    }
}
