import {
    TOGGLE_LOGIN_LOGOUT, COLLEGE_FORM_DATA, REGISTER_USER_OR_ADMIN, USER_LOGIN, FETCH_STATE, FETCH_COLLEGE, FETCH_STATE_SUCCESS, FETCH_COLLEGE_SUCCESS, PUSH_STUDENT_FORM_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {

    myColleges: { colleges: [] },
    myStates: { states: [] },
    college: null
};

const collegeReducer = (state = INITIAL_STATE, action) => {
    console.log("action details")
    console.log(action);
    const { states } = INITIAL_STATE.myStates;
    const { colleges } = INITIAL_STATE.myColleges;

    switch (action.type) {

        case FETCH_STATE:
            return { ...state, myStates: [...states, action.payload] };
        case FETCH_COLLEGE:
            return { ...state, myColleges: [...colleges, action.payload] }
        case COLLEGE_FORM_DATA:
            return { ...state, college: action.payload };
        default:
            return state;
    }
};
export default collegeReducer;   