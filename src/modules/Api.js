import axios from 'axios'
import apiConfig from '../configs/api.json'

export default axios.create({
    baseURL: apiConfig.base_url,
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Token')
    }
})
