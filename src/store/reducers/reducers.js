import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import postsReducer from './postsReducer';

const reducers = combineReducers({
    auth: loginReducer,
    posts: postsReducer
});

export default reducers;