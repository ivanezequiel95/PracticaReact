import axios from 'axios'
import decode from 'jwt-decode'

const LOGIN_API = 'https://reqres.in/api/login';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

const loggedIn = () => {
    const token = localStorage.getItem('token'); 
    return !!token;
}

const login = async (inputs) => {
    try{
        const response = await axios.post(LOGIN_API, inputs)
        localStorage.setItem('token', token);
        return response;
    }catch (err)
    {
        throw err;
    }
}

const logout = () => {
    localStorage.removeItem('token');
}

const getUser = () => {
    const token = localStorage.getItem('token');
    const data = decode(token);
    return data.name;
}

export {
    login,
    loggedIn,
    logout,
    getUser
}