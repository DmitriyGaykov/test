import React, { useEffect, useState } from 'react';
import logo from './../../MEDIA/logo.svg';
import homePage from './../../MEDIA/homepage.svg';
import catalogPage from './../../MEDIA/catalog.svg';
import aboutPage from './../../MEDIA/about.svg';
import MenuPoint from './MenuPoint';
import './../../CSS/header.css';
import useBurger from '../../Hooks/useBurger';



const Header = () => 
{
    const {burger, burger_menu, setBurgerMenu} = useBurger();

    return (
        <header className = 'site-header'>
            <img src = {logo} className = 'logo' alt = 'logo' />
            
            {burger && 
            <div className = {`burger ${burger_menu ? "non-active" : "active"}`} onClick={() => setBurgerMenu(!burger_menu)}>
                <span>—</span>
                <span>—</span>
                <span>—</span>
            </div>
            }

            <ul className = {`header-list  ${burger ? "burger-menu" : ""}  ${burger_menu ? "menu-show" : burger ? "menu-hide" : ""}`}>
                <MenuPoint 
                text='Главная' 
                url={homePage} 
                className="main"
                href="/"
                burger={setBurgerMenu}/>
              
                <MenuPoint
                text='Каталог' 
                url={catalogPage} 
                className='catalog'
                href='/catalog'
                burger={setBurgerMenu}/>

                <MenuPoint
                text='Об нас' 
                url={aboutPage} 
                className="about"
                href='about'
                burger={setBurgerMenu}/>
            </ul>
            
        </header>
        );
}

export default Header;