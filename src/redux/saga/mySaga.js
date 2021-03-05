import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_STATE, FETCH_COLLEGE, PUSH_STUDENT_FORM } from "../actions/types";
import { getData } from '../../api/api';
import { postStates, postColleges, postStudentDetails } from '../actions';

function* generateStatesForCollege() {
    try {
        let response1 = yield call(getData, 'my_states');
        console.log(response1.data);
        yield put(postStates(response1.data));
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log(" Finally ")
    }
}
function* generateCollegeList() {
    try {
        let response2 = yield call(getData, 'my_colleges');
        console.log(response2.data);
        yield put(postColleges(response2.data));
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log(" Finally ")
    }
}
function* generateStudentDetails() {
    try {
        let response3 = yield call(getData, 'student_data');
        console.log(response3.data);
        yield put(postStudentDetails(response3.data));
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log(" Finally ")
    }
}

export function* watcherSaga() {
    console.log("Watcher Called");
    yield takeLatest(FETCH_STATE, generateStatesForCollege);
    yield takeLatest(FETCH_COLLEGE, generateCollegeList);
    yield takeLatest(PUSH_STUDENT_FORM, generateStudentDetails)
}