import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
// import publicationsReducer from './publicationsReducer';

const reducers = combineReducers({
    account: loginReducer,
    // publications: publicationsReducer
});

export default reducers;