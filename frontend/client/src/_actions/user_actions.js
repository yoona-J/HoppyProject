import axios from 'axios';
import {
    GET_USER,
} from './types';

//withCredentials 전역 설정 -- CORS error
axios.defaults.withCredentials = false;

const token = localStorage.getItem('Authorization')

export function getUser() {
    
    const request = axios.get(`https://hoppy.kro.kr/api/profile`, {
        headers: {
            Authorization: token
        }, withCredentials: false
    })
    .then(response => response.data);

    return {
        type: GET_USER,
        payload: request
    }
}