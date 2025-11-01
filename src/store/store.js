import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import videoReducer from '../containers/video/slice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        trendingVideos: videoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
