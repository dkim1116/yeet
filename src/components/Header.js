import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui pointing menu">
            <a className="active item">
                Home
            </a>
            <a className="item">
                Yeets
            </a>
            
            <a className="right item">
                <GoogleAuth />
            </a>
        </div>
    )
};

export default Header;