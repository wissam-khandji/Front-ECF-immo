import { createStore, applyMiddleware } from 'redux';
import {GlobalReducer} from "./Reducers/GlobalReducer";
import thunk from 'redux-thunk';


export default  createStore(
    GlobalReducer,
    applyMiddleware(thunk))