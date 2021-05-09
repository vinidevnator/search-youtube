import React from 'react';
import ReactPlayer from 'react-player';

interface IDisplayVideo {
    url: string
}

// Render video player
export function DisplayVideo({ url }: IDisplayVideo) {
    return <ReactPlayer playing={true} url={`https://www.youtube.com/watch?v=${url}`} />
}
