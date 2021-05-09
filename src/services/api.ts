type TApi = {
    url: string
}

// Return a promise with information of video
export async function Api({ url }: TApi) {
    const apiKey = 'AIzaSyBtjJ-l7xCtZhfOThNMJb1o9lMen3VAt-I';
    const dataReceived = await fetch(`https://www.googleapis.com/youtube/v3/${url}&key=${apiKey}`)

    return dataReceived;
}