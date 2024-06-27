import { SearchBox } from './SearchBox';
import { Logo } from './Logo';
import { Button } from './Button';

import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Logo />
            <SearchBox />
            <Button text='Give Feedback' />
        </nav>
    );
};

export { NavBar };
