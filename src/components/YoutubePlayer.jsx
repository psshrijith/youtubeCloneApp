import { useState } from "react";
import { useParams } from "react-router-dom";

function YoutubePlayer() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    if (!id) return null;
    const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

    return (
        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
            {loading &&
                <div className="w-full h-full flex items-center justify-center text-gray-500">Loading...</div>}
                <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    onLoad={() => setLoading(false)}
                />
        </div>
    );
}

export default YoutubePlayer;