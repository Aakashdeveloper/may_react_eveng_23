import { combineReducers } from "redux";
import films from './movieReducer';

//declare all reducers here
const rootReducer = combineReducers({
    films
})

export default rootReducer