import { all } from 'redux-saga/effects';
import  videoSaga  from '../containers/video/saga';

export default function* rootSaga() {
    yield all([videoSaga()]);
}
