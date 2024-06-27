import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className='search-container'>
            <input
                placeholder='Search a song of your choice'
                className='search-box'
            />
            <div className='search-icon'>
                <img src='./search-icon.svg' alt='Search Icon' />
            </div>
        </div>
    );
};

export { SearchBox };
