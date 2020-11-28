import Api from '../modules/Api'

export default {

    async get(){
        try {
            let response = await Api.get('/health-hub')
            console.log(response.data)
            return response.data
        }catch (e) {
           console.error(e)
        }

    }

}
