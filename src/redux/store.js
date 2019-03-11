import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import coursesReducer from "./reducer";

const reducer = combineReducers( {
    courses: coursesReducer,
} );

export default ( initialState ) =>
    createStore( reducer, initialState, applyMiddleware( thunkMiddleware ) );
