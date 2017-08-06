import { combineReducers } from 'redux';
import Numbers from './NumbersReducer';
import NewResults from './ResultsReducer';

export default combineReducers({
    numbers: Numbers,
    newResults: NewResults
});
