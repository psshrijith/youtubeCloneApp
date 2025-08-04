import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (query) => {
  try {
    // Step 1: Search videos
    const searchResponse = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults: 12,
        q: query,
        type: 'video',
        key: API_KEY,
      },
    });


    const videoItems = searchResponse.data.items;
    const videoIds = videoItems.map(item => item.id.videoId);
    const channelIds = videoItems.map(item => item.snippet.channelId);

    // Step 2: Fetch video stats
    const videoStats = await fetchVideoStats(videoIds);

    // Step 3: Fetch channel avatars
    const channelAvatars = await fetchChannelAvatars(channelIds);

    // Step 4: Merge all data
    const videos = videoItems.map(item => {
      const vid = item.id.videoId;
      const chId = item.snippet.channelId;
      return {
        id: vid,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
        channelAvatar: channelAvatars[chId] || '',
        views: videoStats[vid]?.viewCount || '0',
        likes: videoStats[vid]?.likeCount || '0',
        publishedAt: item.snippet.publishedAt,
      };
    });

    return videos;

  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};


// Add the helper functions used above here:

const fetchVideoStats = async (videoIds) => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'statistics',
        id: videoIds.join(','),
        key: API_KEY,
      },
    });

    const statsMap = {};
    response.data.items.forEach(item => {
      statsMap[item.id] = {
        viewCount: item.statistics.viewCount,
        likeCount: item.statistics.likeCount,
      };
    });

    return statsMap;
  } catch (error) {
    console.error('Error fetching video stats:', error);
    return {};
  }
};

const fetchChannelAvatars = async (channelIds) => {
  try {
    const response = await axios.get(`${BASE_URL}/channels`, {
      params: {
        part: 'snippet',
        id: channelIds.join(','),
        key: API_KEY,
      },
    });

    const avatarMap = {};
    response.data.items.forEach(item => {
      avatarMap[item.id] = item.snippet.thumbnails.default.url;
    });

    return avatarMap;
  } catch (error) {
    console.error('Error fetching channel avatars:', error);
    return {};
  }
};

export const trendingVideos = async() => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'IN',
        maxResults: 12,
        key: API_KEY,
      }
    })

    return response.data.items.map((item) => ({
      id: item?.id,
      title: item?.snippet?.title,
      thumbnail: item?.snippet?.thumbnails?.medium.url,
      channelTitle: item?.snippet?.channelTitle,
      views: item?.statistics?.viewCount,
      likes: item?.statistics?.likeCount,
      publishedAt: item?.snippet?.publishedAt,
    }));
  }
  catch(error){
    console.log("error in trending videos", error);
    return [];
  }
}