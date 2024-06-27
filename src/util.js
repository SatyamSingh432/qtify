const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getTopAlbums = async () => {
    try {
        const albums = await fetchData(
            'https://qtify-backend-labs.crio.do/albums/top'
        );
        return albums;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export { getTopAlbums };
