import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchTrendingRequest} from "../containers/video/slice";
import {trendingVideosSelector} from "../containers/video/selector.js";
import {formatViewCount, formatDate} from "../utils/format";

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const trendingVideos = useSelector(trendingVideosSelector);

        useEffect(() => {
            dispatch(fetchTrendingRequest());
        }, [dispatch]);

    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    { trendingVideos.map((video) => (
                      <div key={video?.id} onClick={() => navigate(`/watch/${video?.id}`)}>
                        <VideoCard
                            video={{
                                id: video?.id,
                                title: video?.snippet?.title,
                                thumbnail: video?.snippet?.thumbnails?.high?.url,
                                channelTitle: video?.snippet?.channelTitle,
                                channelAvatar: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/179324860/original/e78e0691dd182d7bff57084fa8491a5bd4648ae1/design-your-avatar-for-twitch-or-youtube-channel.png',
                                views: formatViewCount(video?.statistics?.viewCount),
                                publishedAt: formatDate(video?.snippet?.publishedAt),
                                }}
                        />
                      </div>
                ))}
            </div>
    );
}