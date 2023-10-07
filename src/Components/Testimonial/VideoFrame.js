import React from "react";

const VideoFrame = () => {
    return (
        <div className="video-container">
            <video
                width="650"
                height="400"
                autoPlay="true"
                controls="true"
                loop
            >
                <source src="/Images/reception-video.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoFrame;
