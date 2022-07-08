import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// saga for search
function* fetchDetails(action) {
  try {
    console.log("details information", action.payload);
    // let details = action.payload;
    const details = yield axios.get(`/api/details/${action.payload}`);
    //sends  to details reducer
    yield put({ type: "SET_DETAILS", payload: details.data });
  } catch (err) {
    console.log(err);
    put({ type: "ERROR GETTING details" });
  }
}

function* detailsSaga() {
  yield takeEvery("FETCH_DETAILS", fetchDetails);
}

export default detailsSaga;
