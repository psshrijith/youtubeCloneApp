import { combineReducers } from '@reduxjs/toolkit';
import videosReducer from '../containers/video/slice';

export default combineReducers({
    videos: videosReducer,
});
