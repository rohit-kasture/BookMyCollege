import api from '../../api/api';
import { COLLEGE_FORM_DATA, PUSH_STUDENT_FORM_SUCCESS, REGISTER_USER_OR_ADMIN, TOGGLE_LOGIN_LOGOUT, USER_LOGIN, FETCH_STATE, FETCH_STATE_SUCCESS, FETCH_COLLEGE, FETCH_COLLEGE_SUCCESS } from './types'
import history from '../../history/history'

export const toggleIsStudent = (isStudentflag) => {
  return { type: REGISTER_USER_OR_ADMIN, payload: isDoctorflag }
}

export const postUser = (user, isStudent) => async dispatch => {
  let response;
  if (isStudent) {
    user = { ...user, "type": "student" };
    response = await api.post('/mystudent', user);
  }
  else {
    user = { ...user, "type": "admin" };
    response = await api.post('/myadmin', user);
  }
};
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const loginUser = (user) => async dispatch => {
  let users = await api.get('/my_students');
  users?.data?.map((usr) => {
    if ((usr.number) === user['number'] && usr.password === user['password']) {
      let firstName = usr.fullname.split(" ")[0];
      firstName = capitalizeFirstLetter(firstName);
      document.getElementById("user").innerText = `Welcome ${firstName}`;
      dispatch({ type: USER_LOGIN, payload: usr });
      dispatch({ type: TOGGLE_LOGIN_LOGOUT, payload: false })
      dispatch({ type: FETCH_STATE })
      dispatch({ type: FETCH_COLLEGE })
      history.push('/home')
      return true;
    }
  });
}

export const postStates = (data) => {
  return { type: FETCH_STATE_SUCCESS, payload: data };
}

export const postColleges = (data) => {
  return { type: FETCH_COLLEGE_SUCCESS, payload: data };
}

export const postStudentDetails = (studentData) => {
  console.log(studentData);
  return ({ type: PUSH_STUDENT_FORM_SUCCESS, payload: studentData })
}

export const dispatchCollege = (college) => async dispatch => {
  console.log(college)
  dispatch({ type: COLLEGE_FORM_DATA, payload: college });
}