import { useState, useEffect } from 'react';
import { CardGrid } from './CardGrid';
import { Carousel } from './Carousel';
import { Filters } from './Filters';
import './Section.css';

const Section = ({ name, albums, showFilters }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [filteredSongsData, setFilteredSongsData] = useState([]);

    useEffect(() => {
        setFilteredSongsData([...albums]);
    }, [albums]);

    return (
        <div className='section-container'>
            <div className='text-container'>
                <p>{name}</p>
                {!showFilters && (
                    <button
                        className='collapse-btn'
                        onClick={() => {
                            setIsCollapsed(!isCollapsed);
                        }}
                    >
                        {isCollapsed ? 'Show All' : 'Collapse'}
                    </button>
                )}
            </div>
            {showFilters ? (
                <Filters
                    setFilteredSongsData={setFilteredSongsData}
                    songsData={albums}
                />
            ) : null}
            <div className='card-grid-container'>
                {isCollapsed ? (
                    <Carousel albums={filteredSongsData} name={name} />
                ) : (
                    <CardGrid albums={filteredSongsData} />
                )}
            </div>
        </div>
    );
};

export { Section };
