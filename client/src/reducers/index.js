import {combineReducers} from 'redux';
import {articles} from './articles';
import {authReducer} from './authReducer'

export default combineReducers({articles,authReducer});