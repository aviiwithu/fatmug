import {GET_ONE } from '../constants/actionType';

export const viewArticle= (state={},action)=>{
    switch(action.type){
        case GET_ONE:
            return action.payload;
        default:
            return state;
            
    }
}
