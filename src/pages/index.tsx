import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { IResponse, IVideo, IVideoInfo } from './interface'
import { Api } from '../services/api'
import { DisplayVideo } from '../components/DisplayVideo';
import InputSearch from '../components/InputSearch';
import VideoEmbed from '../components/VideoEmbed';
import { Container, SearchContent, SearchBar, Results, SearchResults, ResultHeader, VideoSelected } from './styles';

// Create a page to search a video
export function Search() {
    const [search, setSearch] = useState('');
    const [video, setVideo] = useState<IVideo>({} as IVideo);
    const [displayUrlVideo, setDisplayUrlVideo] = useState('');

    async function results() {
        const response = await Api({ url: `search?part=snippet&q=${search}&type=video&maxResults=4` });
        const data: IResponse = await response.json();

        if (data) {
            const listVideos = Object.values(data.items).map((item, index) => {
                const info: IVideoInfo = { title: item.snippet.title, description: item.snippet.description, thumbnail: item.snippet.thumbnails.medium.url, url: item.id.videoId }
                return info;
            })

            setVideo({ item: listVideos });
        } else {
            alert('Failed search data video')
        }
    }

    const showVideo = (url: string) => {
        setDisplayUrlVideo(url)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value.toString());
    }

    return (
        <Container>
            <SearchBar>
                <InputSearch handleChange={handleChange} />
                <Button primary onClick={results}>Search</Button>
            </SearchBar>
            { video.item ? (
                <SearchContent>
                    <SearchResults>
                        <Results>
                            <ResultHeader>Resultados</ResultHeader>
                            <VideoEmbed list={video.item} showVideo={showVideo} />
                        </Results>
                    </SearchResults>
                    <VideoSelected>
                        <DisplayVideo url={displayUrlVideo} />
                    </VideoSelected>
                </SearchContent>
            ) : undefined}
        </Container>
    )
}