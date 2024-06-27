import { CardGrid } from './CardGrid';

import './Section.css';

const Section = ({ name, albums }) => {
    return (
        <div className='section-container'>
            <div className='text-container'>
                <p>{name}</p>
                <button className='collapse-btn' onClick={() => {}}>
                    Collapse
                </button>
            </div>

            <CardGrid albums={albums} />
        </div>
    );
};

export { Section };
