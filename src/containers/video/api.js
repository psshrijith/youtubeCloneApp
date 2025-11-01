import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const youtube = axios.create({
    baseURL: BASE_URL,
    params: { key: API_KEY },
});

const getYoutubeData = (endpoint, params = {}) =>
    youtube.get(endpoint, { params });

export const fetchVideosApi = (query) =>
    getYoutubeData('/search', {
        part: 'snippet',
        maxResults: 12,
        q: query,
        type: 'video',
    });

export const fetchVideoStatsApi = (videoIds) =>
    getYoutubeData('/videos', {
        part: 'statistics',
        id: videoIds.join(','),
    });

export const fetchChannelAvatarsApi = (channelIds) =>
    getYoutubeData('/channels', {
        part: 'snippet',
        id: channelIds.join(','),
    });

export const fetchTrendingVideosApi = () => {
    return axios.get(`${BASE_URL}/videos`, {
        params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'IN',
            maxResults: 12,
            key: API_KEY,
        },
    });
};