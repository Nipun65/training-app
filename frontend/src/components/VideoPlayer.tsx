import React, { useState } from 'react';

interface VideoPlayerProps {
    videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="relative">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 rounded-lg">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
            )}
            <video
                width="600"
                controls
                onLoadedData={() => setLoading(false)}
                onLoadStart={() => setLoading(true)}
                className="rounded-lg"
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;