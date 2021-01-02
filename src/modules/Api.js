import axios from 'axios'
// import apiConfig from '../configs/api.json'

export default axios.create({
    // baseURL: apiConfig.base_url,
    baseURL: 'localhost:8000/api',
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*"
    },
})
