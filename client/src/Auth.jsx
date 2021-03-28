import React from 'react';
import { Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode'

const Auth = (props) => {
    
    const {Component} = props;
    
    const token = JSON.parse(localStorage.getItem('user'))?.token;
    
    if(token){
        const tokenExp = jwtDecode(token).exp;
        const compareData = new Date().getTime()/1000;
        if(tokenExp>compareData) {
            return (
                <>
                <Component props={props} />
                </>
            )
        } else return (
            <>
            <Redirect to="/login" />
            </>
        )
    } else {
        return (
            <>
               <Redirect to="/login" />
            </>
        )
    }

    
}

export default Auth