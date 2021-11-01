import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Link} from "react-router-dom";

const NavBar = () => {
 return (
        <nav>
            <ul>
                <li><Link to='/memes'>See Memes</Link></li>
                <li><Link to='/memes/new'>New Meme</Link></li>
            </ul>
        </nav>
    );
};

NavBar.propTypes = {};

export default NavBar;