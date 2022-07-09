import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* fetchBooks (action){
  // console.log('made it to fetchDetails!', action);
  try {
      let res = yield axios.get('/api/books/');
      console.log('response', res.data)
      yield put({
          type: 'SET_DETAILS',
          payload: res.data
      });
  }
  catch (err) {
      console.error(' failed', err);
  }
}
function* fetchCompleted() {
  
  try {
    const response = yield axios({
      method: 'GET',
      url: `api/books/completed`,
    });
    console.log('GET Completed Books:', response.data);
    yield put({ type: 'SET_COMPLETED', payload: response.data });

  } catch {
    console.log('GET/COMPLETED books error');
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
  yield takeEvery("FETCH_DB_BOOKS", fetchBooks);
  yield takeEvery("FETCH_COMPLETED_BOOKS", fetchCompleted );


}
export default booksSaga;
