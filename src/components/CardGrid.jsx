import { Card } from './Card';

import './CardGrid.css';

const CardGrid = ({ topAlbums }) => {
    return (
        <div className='grid-container'>
            {topAlbums.map((topAlbum) => (
                <Card
                    noOfFollows={`${topAlbum.follows} Follows`}
                    key={topAlbum.id}
                    albumImage={topAlbum.image}
                    albumName={topAlbum.title}
                    numOfSongs={topAlbum.songs?.length}
                />
            ))}
        </div>
    );
};

export { CardGrid };
