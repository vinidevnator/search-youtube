import React from 'react';
import { Item } from 'semantic-ui-react';

interface IVideoEmbed {
    list: IItem[]
    showVideo: (url: string) => void
}

interface IItem {
    title: string,
    description: string,
    thumbnail: string,
    url: string
}

export default function VideoEmbed({ list, showVideo }: IVideoEmbed) {
    return (
        <Item.Group divided link>
            {list?.map((item: IItem, index: number) => {
                return (
                    <Item key={index} onClick={() => {showVideo(item.url)}}>
                        <Item.Image src={item.thumbnail} />
                        <Item.Content>
                            <Item.Header>{item.title}</Item.Header>
                            <Item.Description>{item.description}</Item.Description>
                        </Item.Content>
                    </Item>
                )
            })}
        </Item.Group>
    )
}