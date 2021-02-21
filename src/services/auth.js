import Api from "../modules/Api";

export default {
    async login(credentials) {
        try {
            let response = await Api.post('/auth/login', credentials)

            localStorage.setItem('expiry', new Date().getTime().toString())
            localStorage.setItem('Token', response.data.access_token)
            localStorage.setItem('User', JSON.stringify(response.data.user))
            return response.status
        } catch (e) {
            console.log(e)
        }
    },

    updateUser(){
        Api.get('/auth/user').then(user => {
            localStorage.setItem('User', JSON.stringify(user.data.data))
        })
    },

    isLogged() {
        let minutes = (new Date().getTime().toString() - localStorage.getItem('expiry'))/60000
        if (minutes < 10 && localStorage.getItem('Token') !== null){
            return true;
        }else{
            localStorage.removeItem('Token')
            localStorage.removeItem('User')
            return false;
        }

    },

    async logout() {
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        await Api.get('auth/logout').finally(() => this.$router.push('/login'))

    },

    async register(form) {
        try {
            let response = await Api.post('/auth/register', form)
            localStorage.setItem('Token', response.data.access_token)
            localStorage.setItem('User', JSON.stringify(response.data.user))
            return response.status
        } catch (e) {
            return e.response.status
        }
    }
}
