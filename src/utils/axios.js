import axios from 'axios';


console.log('axios token', localStorage.getItem('token'));

const instance = axios.create({

    baseURL : 'http://localhost:8080/',
    headers: {
        Authorization : `Bearer ${localStorage.getItem('token')}`         
    }
});







export default instance;