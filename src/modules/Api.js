import axios from 'axios'
import auth from "../services/auth";
// import apiConfig from '../configs/api.json'

let api = axios.create({
    // baseURL: apiConfig.base_url,
    baseURL: 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*"
    },

})

api.interceptors.response.use((res) => res, error => {
    if(error.response.status === 401){
        auth.logout().then(()=> this.$router.push({name: 'Login'}))
    }
})

export default api
