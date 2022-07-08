import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchSaga(action) {
  // posts all books into my database
  yield axios({
    method: "POST",
    url: "api/books",
    data: action.payload,
  });
}

function* booksSaga() {
  yield takeEvery("FETCH_BOOK", fetchSaga);
}
export default booksSaga;
