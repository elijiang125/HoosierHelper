import React from 'react';

const Navbar = () => {
    const [click, setClick] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setClick(!click);
        console.log(click);
    };

    return (
        <nav className={click ? 'expanded' : ' '}>
            {click && (
                <>
                    <div className="fade-in"><img src="src/assets/bulb.svg" className="filter-purple" alt="bulb" /></div>
                    <div className="fade-in"><img src="src/assets/skill-user.svg" className="filter-purple" alt="skill user" /></div>
                </>
            )}

            <div onClick={handleClick} className="menu-button"><img src="src/assets/menu-burger.svg" alt="menu" /></div>

            {click && (
                <>
                    <div className="fade-in"><img src="src/assets/bulb.svg" className="filter-purple" alt="bulb" /></div>
                    <div className="fade-in"><img src="src/assets/envelope.svg" className="filter-purple" alt="envelope" /></div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
