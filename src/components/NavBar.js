import React from 'react';
import {Link} from "react-router-dom";
import MemeGifLogo from './MemeGifLogo';


const NavBar = () => {
 return (
 <div>
        <nav className="nav"> 
        <br /> 
                <Link to='/memes' className='link'>See Memes</Link>
            <MemeGifLogo />
            
                <Link to='/memes/new' className='link'>New Meme</Link>

                

            <br />
            <br />
         
        </nav>
        <br />
         </div>
    );
};

NavBar.propTypes = {};

export default NavBar;