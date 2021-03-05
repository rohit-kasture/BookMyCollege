import { all } from "redux-saga/effects";
import { watcherSaga } from "../saga/mySaga";

export default function* rootSaga() {
    yield all([
        watcherSaga(),
    ])
}