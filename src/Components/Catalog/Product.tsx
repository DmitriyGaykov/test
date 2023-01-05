import react, { useState } from 'react';
import { IProduct } from './IProduct';
import './../../CSS/product.css';

const Product = (props : IProduct) => {
    const [desc, setDesc] = useState(false);

    return(
        <div className="product">
            <img src={props.img} alt={props.name} className="product-img" />
            <div className="product-name">{props.name}</div>
            <div className="product-price">Цена товара: {props.price}</div>
            
            <button 
            className={`showDesc ${desc && "hide"}`} 
            onClick={() => setDesc(!desc)}>{!desc ? "Покать описание" : "Скрыть описание"}
            </button>

            {
            desc && 
            <div className="product-desc">{props.description}</div>}
        </div>
        );
}

export default Product;