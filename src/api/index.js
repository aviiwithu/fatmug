import axios from 'axios';

// const url = axios.create({baseURL: 'https://fatmug.herokuapp.com/'});
const url = axios.create({baseURL: 'http://fatmug.herokuapp.com'});

url.interceptors.request.use((req)=> {
    if (localStorage.getItem('user')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
})

export const fetchArt = ()=> url.get(`/art`);
export const createArt = (newArt)=> url.post(`/art`, newArt);
export const updateArt = (id, updatedArt) => url.patch(`/art/${id}`,updatedArt);
export const deleteArt = (id)=> url.delete(`/art/${id}`);

export const signup = (authData)=>url.post(`/auth/signup`, authData );
export const signin = (authData)=>url.post(`/auth/signin`, authData );

export const getOne = (id)=>url.get(`/art/${id}`,{id});
export const getUserArt = (id)=>url.get(`/art/user/${id}`,{id});
