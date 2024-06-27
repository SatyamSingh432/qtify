import { Card } from './Card';

import './CardGrid.css';

const CardGrid = ({ albums }) => {
    return (
        <div className='grid-container'>
            {albums.map((album) => (
                <Card
                    noOfFollows={`${album.follows} Follows`}
                    key={album.id}
                    albumImage={album.image}
                    albumName={album.title}
                    numOfSongs={album.songs?.length}
                />
            ))}
        </div>
    );
};

export { CardGrid };
