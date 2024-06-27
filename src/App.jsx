import { useState, useEffect } from 'react';

import { HeroSection } from './components/HeroSection';
import { NavBar } from './components/NavBar';

import { getTopAlbums, getNewAlbums, getSongs } from './util.js';
import { Section } from './components/Section';

function App() {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        (async () => {
            const topAlbumsData = await getTopAlbums();
            setTopAlbums(topAlbumsData);

            const newAlbumsData = await getNewAlbums();
            setNewAlbums(newAlbumsData);

            const songsData = await getSongs();
            setSongs(songsData);
        })();
    }, []);

    return (
        <>
            <NavBar />
            <HeroSection />

            <Section name='Top Albums' albums={topAlbums} />
            <Section name='New Albums' albums={newAlbums} />
            <Section name='Songs' albums={songs} showFilters />
        </>
    );
}

export default App;
