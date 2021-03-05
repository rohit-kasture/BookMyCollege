import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import collegeReducer from './collegeData';
import userReducer from './userLoginData';
import sagaReducer from './saga'; 

export default combineReducers({
    form: formReducer,
    userData: userReducer,
    collegeData: collegeReducer,
    saga: sagaReducer
});