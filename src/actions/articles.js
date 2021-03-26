import { FETCH_ALL, CREATE, DELETE, UPDATE, GET_ONE,FETCH_USER_ART} from '../constants/actionType';

import * as api from '../api/index'

export const getArt = (history)=>async (dispatch)=> {
    try {
        const {data} = await api.fetchArt();
        dispatch({type: FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message);
        history.push('/login');
    }
}
export const getOne = (id)=>async (dispatch)=> {
    try {
        const {data} = await api.getOne(id);
        dispatch({type:GET_ONE, payload:data});
    } catch (error) {
        console.log(error);
    }
}
export const getUserArt = (id)=>async (dispatch)=> {

    try {
        const {data} = await api.getUserArt(id);
        dispatch({type:FETCH_USER_ART,data})
    } catch (error) {
        console.log(error);
    }
}


export const createArt = (article, history) => async (dispatch) =>{
    try {
        const {data} = await api.createArt(article);
        dispatch({type: CREATE, payload:data});
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const updateArt = (id, article, history)=> async (dispatch) => {
    try {
        const { data } = await api.updateArt(id, article);
        dispatch({type: UPDATE, payload: data});
        history.push('/');
        
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteArt = (id)=> async (dispatch) => {
    try {
        await api.deleteArt(id);
        dispatch({type: DELETE,payload:id})
    } catch (error) {
        console.log(error);
    }
}