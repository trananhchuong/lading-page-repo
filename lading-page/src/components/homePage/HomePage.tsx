import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import DarkMode from '../darkMode/DarkMode';

HomePage.propTypes = {
    
};

function HomePage() {
    return (
        <div>
            <DarkMode/>
            <Header/>
            This is home page
        </div>
    );
}

export default HomePage;