import React from "react";
import telegram from './../../MEDIA/telegram.svg';
import viber from './../../MEDIA/viber.svg';
import vk from './../../MEDIA/vk.svg';
import phone from './../../MEDIA/phone.svg';
import IFooterElement from "./IFooterElement";
import FooterBlock from "./FooterBlock";
import './../../CSS/footer.css';

const Footer = () => 
{
    let messagers : IFooterElement[] = [
        {text: 'Telegram', url: telegram, urlTo: '#s'},
        {text: 'Viber', url: viber, urlTo: '#s'},
        {text: 'VK', url: vk, urlTo: '#s'},
    ];

    let contacts : IFooterElement[] =[
        {text: '+375(29) 395-12-34', url: phone, urlTo: null},
        {text: '+375(29) 395-12-34', url: phone, urlTo: null},
    ];

    return (
        <footer className = 'site-footer'>
            <FooterBlock className="footer-messagers" els={messagers}/>
            <FooterBlock className="footer-contacts" els={contacts}/>
        </footer>
        );
}

export default Footer;