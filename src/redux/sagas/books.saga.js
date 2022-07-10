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


function* fetchCompleted(action) {
  
  try {
    const response = yield axios({
      method: 'PUT',
      url: `/api/books/${action.payload}`,
    });
    console.log('GET Completed Books:', action.payload);
    yield put({ type: 'FETCH_DB_BOOKS'});

  } catch {
    console.log('GET/COMPLETED books error' );
  }

}

function* deleteBooks(action) {
  // delete books from db 
  try {
      yield axios.delete(`/api/books/${action.payload}`);
  } catch {
      console.log('delete books ', action.payload);
  } yield put({ type: 'FETCH_DB_BOOKS' })
};

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
  yield takeEvery("DELETE_DB_BOOKS", deleteBooks );



}
export default booksSaga;
