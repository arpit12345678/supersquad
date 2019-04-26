import characters from './characters';
import {ADD_CHARACTER} from '../actions';
import {combineReducers} from 'redux';
import heroes from './heroes';


const rootReducer=combineReducers({
    characters,
    heroes
})
export default rootReducer;