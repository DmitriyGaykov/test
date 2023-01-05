import React from "react";
import { Link } from "react-router-dom";
import IMenuPoint from "./IMenuPoint";

const MenuPoint = (props : IMenuPoint) =>
{
    return (
        <Link to={props.href} onClick={() => props.burger(true)}>
            <li className = {'header-list-point ' + props.className}>
                <div className="icon"><img src={props.url} alt="" />
                </div>
                {props.text}
            </li>
        </Link>
        );
}

export default MenuPoint;