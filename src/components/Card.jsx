import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import './Card.css';

const Card = ({ albumImage, albumName, numOfSongs, noOfFollows }) => {
    return (
        <Tooltip
            title={numOfSongs ? `${numOfSongs} songs` : ``}
            placement='top'
            arrow
        >
            <div className='card-container'>
                <div className='card'>
                    <div className='card-image'>
                        <img src={albumImage} alt={albumName} />
                    </div>
                    <Chip
                        className='chip'
                        label={noOfFollows}
                        size='small'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>
                <div className='album-name'>{albumName}</div>
            </div>
        </Tooltip>
    );
};

export { Card };
