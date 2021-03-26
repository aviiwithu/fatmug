import {AUTH} from '../constants/actionType';
import * as api from '../api/index';

export const signup = (authData, history)=> async(dispatch)=>{

    const { password, confirmPassword} = authData;
    try {
        const passwordCheck = password===confirmPassword;
        if(!passwordCheck) return alert("confirm password do not match");

        const {data} = await api.signup(authData);

        dispatch({type:AUTH, data});
        history.push('/')
        
    } catch (error) {
        console.log({message:error.message})
    }
}

export const signin = (authData,history)=> async(dispatch)=>{

    try {
        const {data} = await api.signin(authData);

        dispatch({type:AUTH, data});
        history.push('/');

    } catch (error) {
        alert("invalid username and password")
        console.log({message:error.message})
    }
}