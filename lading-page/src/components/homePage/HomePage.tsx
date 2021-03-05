import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/Header';
import DarkMode from '../darkMode/DarkMode';
import CustomSearch from '../customSearch/CustomSearch';

HomePage.propTypes = {
    
};

function HomePage() {
    return (
        <div>
            <DarkMode/>
            <Header/>
            <CustomSearch/>
        </div>
    );
}

export default HomePage;