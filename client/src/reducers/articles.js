import {FETCH_ALL, CREATE, DELETE, UPDATE,FETCH_USER_ART } from '../constants/actionType';

const initialState={
    allArticles:null,
    userArt:null
}

export const articles=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_ALL:
            localStorage.setItem('allArt', JSON.stringify({...action.payload}) );
            return {
                ...state,
                allArticles:action.payload
            };
        case FETCH_USER_ART:
            return {
                ...state,
                userArt:action.data
            }
        case CREATE:
                return {...state,
                     allArticles:[...state.allArticles,action.payload],
                     userArt:[...state.userArt,action.payload]
                    };
        case UPDATE:
                return {
                    ...state,
                    allArticles:state.allArticles.map((article)=>article._id===action.payload?action.payload:article)
                }
                    
        case DELETE:
            return {
                ...state,
                allArticles:state.allArticles.filter((article)=>article._id!==action.payload),
                userArt:state.userArt.filter((art)=>art._id!==action.payload)
            }
            // articles.filter((article)=> article._id!== action.payload);
        default:
            return state;
            
    }
}
