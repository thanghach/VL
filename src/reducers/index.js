import { combineReducers } from 'redux';
import Numbers from './NumbersReducer';
import Result from './ResultReducer';

export default combineReducers({
    numbers: Numbers,
    result: Result
});
