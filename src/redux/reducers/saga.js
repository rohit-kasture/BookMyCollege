import {
    TOGGLE_LOGIN_LOGOUT,COLLEGE_FORM_DATA, REGISTER_USER_OR_ADMIN, USER_LOGIN, FETCH_STATE, FETCH_COLLEGE, FETCH_STATE_SUCCESS, FETCH_COLLEGE_SUCCESS, PUSH_STUDENT_FORM_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {  
    myStatesSuccess: [],
    myCollegesSuccess: [],
    studentDataSuccess: [],
};

const sagaReducer = (state = INITIAL_STATE, action) => {
    console.log("SAGA's REDUCER")
    console.log(action);
  
    switch (action.type) {
        case FETCH_STATE_SUCCESS:
            return { ...state, myStatesSuccess: [action.payload] };
        case PUSH_STUDENT_FORM_SUCCESS:
            return { ...state, studentDataSuccess: [action.payload] };
        case FETCH_COLLEGE_SUCCESS:
            return { ...state, myCollegesSuccess: [action.payload] };
        default:
            return state;
    }
};
export default sagaReducer;   