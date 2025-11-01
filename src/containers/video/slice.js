import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items : [],
    trending : [],
    loading: false,
    error: null,
}

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        fetchTrendingRequest: (state) => {
            state.loading = true;
        },
        fetchTrendingSuccess: (state, action) => {
            state.loading = false;
            state.trending = action.payload;
        },
        fetchTrendingFailure: (state, action) => {
            state.loading = false;
            state.trending = action.payload;
        }
    }
})

export const {
    fetchTrendingRequest,
    fetchTrendingSuccess,
    fetchTrendingFailure
} = videoSlice.actions;

export default videoSlice.reducer;

