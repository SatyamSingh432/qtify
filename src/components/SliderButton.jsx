import './SliderButton.css';

const SliderButton = ({ name, direction }) => {
    return (
        <button
            className={`${direction}-btn slider-btn`}
            id={`${name.split(' ').join('')}-${direction}`}
            disabled={false}
        >
            <img src={`${direction}-button.png`} alt={`${direction} button`} />
        </button>
    );
};

export { SliderButton };
