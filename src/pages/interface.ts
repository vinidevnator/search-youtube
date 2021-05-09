export interface IResponse {
    items: {
        id: {
            videoId: string
        },
        snippet: {
            channelId: string,
            title: string,
            description: string,
            thumbnails: {
                medium: {
                    url: string
                }
            }
        }
    }[]
}

export interface IVideoInfo {
    title: string,
    description: string,
    thumbnail: string,
    url: string
}

export interface IVideo {
    item: IVideoInfo[]
}