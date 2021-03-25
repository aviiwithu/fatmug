import {combineReducers} from 'redux';
import {articles} from './articles';
import {authReducer} from './authReducer';
import {viewArticle} from './viewArticle';

export default combineReducers({articles,authReducer,view:viewArticle});