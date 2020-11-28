import Api from "../modules/Api";

export default {
    async login(credentials){
        try{
            let response = await Api.post('/auth/login', credentials)
            localStorage.setItem('Token', response.data.access_token)
            localStorage.setItem('User', response.data.user)
            return  response.status
        }catch (e) {
            return  e.response.status
        }
    },

    isLogged(){
        return localStorage.getItem('Token') !== null
    },

    async logout(){
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        await Api.get('auth/logout')
    },

    async register(form){
        try{
            let response = await Api.post('/auth/register', form)
            localStorage.setItem('Token', response.data.access_token)
            localStorage.setItem('User', response.data.user)
            return  response.status
        }catch (e) {
            return  e.response.status
        }
    }
}
