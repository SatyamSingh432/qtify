import { useState } from 'react';
import { CardGrid } from './CardGrid';
import { Carousel } from './Carousel';

import './Section.css';

const Section = ({ name, albums }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return (
        <div className='section-container'>
            <div className='text-container'>
                <p>{name}</p>
                <button
                    className='collapse-btn'
                    onClick={() => {
                        setIsCollapsed(!isCollapsed);
                    }}
                >
                    {isCollapsed ? 'Show All' : 'Collapse'}
                </button>
            </div>
            <div className='card-grid-container'>
                {isCollapsed ? (
                    <Carousel albums={albums} name={name} />
                ) : (
                    <CardGrid albums={albums} />
                )}
            </div>
        </div>
    );
};

export { Section };
