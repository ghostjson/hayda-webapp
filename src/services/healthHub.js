import Api from '../modules/Api'

export default {

    async get(){
        try {
            let response = await Api.get('/health-hub')
            return response.data
        }catch (e) {
           console.error(e)
        }

    }

}
