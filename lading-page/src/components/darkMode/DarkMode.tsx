import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { IMG_DARDMODE } from '../../constant/ImagesConstant';

DarkMode.propTypes = {

};

function DarkMode(props) {
    const clickedClass = 'clicked';
    const body = document.body;
    const lightTheme = 'light';
    const darkTheme = 'dark';
    const NightIcon = IMG_DARDMODE.NightIcon;
    const SunnyIcon = IMG_DARDMODE.SunnyIcon;


    let theme;

    if (localStorage) {
        theme = localStorage.getItem('theme');
    }
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e: any) => {

        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            // e.target.classList.remove(clickedClass);
            localStorage.setItem('theme', 'light');
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            // e.target.classList.add(clickedClass);
            localStorage.setItem('theme', 'dark');
            theme = darkTheme;
        }
    };


    // <button
    //     className={theme === 'dark' ? clickedClass : ''}
    //     id="darkMode"
    //     onClick={e => switchTheme(e)}
    // >set</button>

    return <>
        <Switch
            id="darkMode"
            onClick={e => switchTheme(e)}
            className={theme === 'dark' ? clickedClass : ''}
            checkedChildren={<NightIcon />}
            unCheckedChildren={<SunnyIcon />}
            defaultChecked
        />
    </>
        ;
}

export default DarkMode;