import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchBooks (action){
  // console.log('made it to fetchDetails!', action);
  try {
      let res = yield axios.get(`/api/books/${action.payload}`);
      
      yield put({
          type: 'SET_DETAILS',
          payload: res.data
      });
  }
  catch (err) {
      console.error(' failed', err);
  }
}

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
  yield takeEvery("FETCH_BOOK", fetchSaga);

}
export default booksSaga;
