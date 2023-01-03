import React from 'react';
import logo from './../../MEDIA/logo.svg';
import homePage from './../../MEDIA/homepage.svg';
import catalogPage from './../../MEDIA/catalog.svg';
import aboutPage from './../../MEDIA/about.svg';
import MenuPoint from './MenuPoint';
import './../../CSS/header.css';

const Header = () => 
{
    return (
        <header className = 'site-header'>
            <img src = {logo} className = 'logo' alt = 'logo' />
            <ul className = 'header-list'>
                <MenuPoint 
                text='Главная' 
                url={homePage} />
              
                <MenuPoint
                text='Каталог' 
                url={catalogPage} />

                <MenuPoint
                text='Об нас' 
                url={aboutPage} />
            </ul>
        </header>
        );
}

export default Header;