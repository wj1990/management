import {createStore, combineReducers} from 'redux';
import user from '../reducers/user';
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

export default createStore(combineReducers({user}), reduxDevTools && reduxDevTools());