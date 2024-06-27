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

const getNewAlbums = async () => {
    try {
        const newAlbums = await fetchData(
            'https://qtify-backend-labs.crio.do/albums/new'
        );
        return newAlbums;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getSongs = async () => {
    try {
        const songs = await fetchData(
            'https://qtify-backend-labs.crio.do/songs'
        );
        return songs;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getGenres = async () => {
    try {
        const genres = await fetchData(
            'https://qtify-backend-labs.crio.do/genres'
        );
        return genres.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export { getTopAlbums, getNewAlbums, getSongs, getGenres };
