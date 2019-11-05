import {createStore, combineReducers, applyMiddleware} from "redux";
import {MainPageReducer} from'./MainPageReducer';
import {reducer as formReducer} from 'redux-form'
import thunkMiddleweare from 'redux-thunk';

let reducers=combineReducers({
    MainPage:MainPageReducer,
    form: formReducer

})
let store=createStore(reducers,applyMiddleware(thunkMiddleweare));
export default store;