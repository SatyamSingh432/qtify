import { Card } from './Card';

import './CardGrid.css';

const CardGrid = ({ albums }) => {
    return (
        <div className='grid-container'>
            {albums.map((album) => (
                <Card
                    noOfFollows={
                        album.follows !== undefined
                            ? `${album.follows} Follows`
                            : `${album.likes} Likes`
                    }
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
