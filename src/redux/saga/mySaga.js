import { call, cancelled, put, takeLatest } from "redux-saga/effects";
import { FETCH_STATE, FETCH_COLLEGE, PUSH_STUDENT_FORM } from "../actions/types";
import { getData } from '../../api/api';
import { postStates, postColleges, postStudentDetails } from '../actions';
import axios from 'axios';

function* generateStatesForCollege() {
    const source1 = axios.CancelToken.source();
    try {
        let response1 = yield call(getData, 'my_states', { cancelToken: source1.token });
        console.log(response1.data);
        yield put(postStates(response1.data));
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log(" Finally generateStatesForCollege")
        if (yield cancelled()) {
            console.log("TASK CANCELLED")
            source1.cancel();
        }
    }
}
function* generateCollegeList() {
    const source2 = axios.CancelToken.source();

    try {
        let response2 = yield call(getData, 'my_colleges', { cancelToken: source2.token });
        console.log(response2.data);
        yield put(postColleges(response2.data));
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log(" Finally generateCollegeList")
        if (yield cancelled()) {
            console.log("TASK CANCELLED")
            source2.cancel();
        }
    }
}
function* generateStudentDetails() {
    const source3 = axios.CancelToken.source();

    try {
        let response3 = yield call(getData, 'student_data', { cancelToken: source3.token });
        console.log(response3.data);
        yield put(postStudentDetails(response3.data));
    }
    catch (error) {
        console.log(error)
    }
    finally {
        console.log(" Finally generateStudentDetails")
        if (yield cancelled()) {
            console.log("TASK CANCELLED")
            source3.cancel();
        }
    }
}

export function* watcherSaga() {
    console.log("Watcher Called");
    yield takeLatest(FETCH_STATE, generateStatesForCollege);
    yield takeLatest(FETCH_COLLEGE, generateCollegeList);
    yield takeLatest(PUSH_STUDENT_FORM, generateStudentDetails)
}