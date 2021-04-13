import {GET_ONE } from '../constants/actionType';

const initialState={
    article:null,
    loading:null
}

export const viewArticle= (state=initialState,action)=>{
    switch(action.type){
        case GET_ONE:
            return {
                ...state,
                article:action.payload,
                loading:false
            };
        default:
            return state;
            
    }
}
