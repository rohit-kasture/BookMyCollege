import {
    TOGGLE_LOGIN_LOGOUT, COLLEGE_FORM_DATA, REGISTER_USER_OR_ADMIN, USER_LOGIN, FETCH_STATE, FETCH_COLLEGE, FETCH_STATE_SUCCESS, FETCH_COLLEGE_SUCCESS, PUSH_STUDENT_FORM_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    toggleLoginLogout: true,
    loggedInUser: { user: null },
    isAdmin: false,
    myStudents: { students: [] },
    myAdmins: { admins: [] },
};

const userReducer = (state = INITIAL_STATE, action) => {
    console.log("action details")
    console.log(action);

    switch (action.type) {
        case REGISTER_USER_OR_ADMIN:
            return { ...state, isAdmin: action.payload };
        case TOGGLE_LOGIN_LOGOUT:
            return { ...state, toggleLoginLogout: action.payload };
        case USER_LOGIN:
            return { ...state, loggedInUser: { user: action.payload } };

        default:
            return state;
    }
};
export default userReducer;   