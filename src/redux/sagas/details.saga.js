import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// saga for search
function* fetchDetails(action) {
    try {
        console.log('details information', action.payload);
        let details = action.payload;
        const response = yield axios.get(`/api/id/${details}`);
        //sends results to details reducer below
        yield put({ type: "SET_DETAILS", payload: response.data });
    } catch (err) {
        console.log(err);
        put({ type: "ERROR GETTING details" });
    }
}

function* detailsSaga(){
    yield takeEvery ('FETCH_DETAILS', fetchDetails);
}

export default detailsSaga;