import React from "react";
import IMenuPoint from "./IMenuPoint";

const MenuPoint = (props : IMenuPoint) =>
{
    return (
        <a href='#s'>
            <li className = 'header-list-point'>
                <div className="icon"><img src={props.url} alt="" />
                </div>
                {props.text}
            </li>
        </a>
        );
}

export default MenuPoint;