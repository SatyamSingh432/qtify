import { useState, useEffect } from 'react';

import { HeroSection } from './components/HeroSection';
import { NavBar } from './components/NavBar';

import { getTopAlbums } from './util.js';
import { Section } from './components/Section';

function App() {
    const [topAlbums, setTopAlbums] = useState([]);

    useEffect(() => {
        (async () => {
            const topAlbumsData = await getTopAlbums();
            setTopAlbums(topAlbumsData);
        })();
    }, []);

    return (
        <>
            <NavBar />
            <HeroSection />

            <Section name='Top Albums' topAlbums={topAlbums} />
        </>
    );
}

export default App;
