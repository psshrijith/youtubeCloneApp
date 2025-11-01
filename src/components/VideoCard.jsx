import React from 'react';

export default function VideoCard({video}) {
    const{
        title,
        thumbnail,
        channelTitle,
        channelAvatar,
        views,
        publishedAt,
    } = video

    return (
            <div className="flex flex-col rounded-xl overflow-hidden hover:shadow-md mx-2 border-1 h-full w-full">
                <img
                    src={thumbnail}
                    alt={title}
                    className="object-cover w-full"
                />

                <div className="flex flex-row p-3">
                    <div className="flex p-1">
                        <img
                            src={channelAvatar}
                            alt={channelTitle}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="fomt-semibold text-xs line-clamp-1">{title}</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">{channelTitle}</p>
                        <p className="text-gray-500 text-xs dark:text-gray-500">{views} * {publishedAt}</p>
                    </div>
                </div>
            </div>
    )
}