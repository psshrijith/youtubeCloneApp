import React, { useEffect, useState } from "react";
import { trendingVideos } from "../services/youtube";
import VideoCard from "./VideoCard";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchTrendingRequest} from "../containers/video/slice";
import {trendingVideosSelector} from "../containers/video/selector.js";

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [videos, setVideos] = useState([]);
    const trendingVideos = useSelector(trendingVideosSelector);

        useEffect(() => {
            dispatch(fetchTrendingRequest());
        }, [dispatch]);

    return (
            <div className="flex flex-col gap-4">
                <div className="flex flex-row flex-wrap">
                    { trendingVideos.map((video) => (
                      <div key={video?.id} onClick={() => navigate(`/watch/${video?.id}`)}>
                        <VideoCard
                            video={{
                                id: video?.id,
                                title: video?.snippet?.title,
                                thumbnail: video?.snippet?.thumbnails?.default?.url,
                                channelTitle: video?.snippet?.channelTitle,
                                channelAvatar: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/179324860/original/e78e0691dd182d7bff57084fa8491a5bd4648ae1/design-your-avatar-for-twitch-or-youtube-channel.png',
                                views: video?.views,
                                publishedAt: video?.publishedAt,
                                }}
                        />
                      </div>
                ))}
                </div>
            </div>
    );
}