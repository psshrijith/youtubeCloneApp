import { call, takeLatest, put } from 'redux-saga/effects';
import { fetchTrendingVideosApi } from './api';
import {fetchTrendingRequest, fetchTrendingSuccess, fetchTrendingFailure} from "./slice";

function* handleFetchTrendingVideos(){
    try{
        const response = yield call(fetchTrendingVideosApi);
        yield put(fetchTrendingSuccess(response?.data?.items));
    }
    catch(error){
        yield put(fetchTrendingFailure(error));
    }
}

export default function* videoSaga(){
    yield takeLatest(fetchTrendingRequest.type, handleFetchTrendingVideos);
}

