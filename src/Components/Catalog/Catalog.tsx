import React, { useState, useEffect } from 'react';
import Product from './Product';
import useProducts from '../../Hooks/useProducts';
import "./../../CSS/catalog.css";
import {load} from './Loading';

const Catalog = () => {
    const { products, loading } = useProducts();
    const [louder, setLoader] = useState("Loading");

    useEffect(() => load(setLoader, loading), [loading]);

    return(
        <div className="catalog-block">
            {
                !loading 
                ? products?.map(product => <Product name={product.name} 
                                                    price={product.price} 
                                                    id={product.id} 
                                                    description={product.description} 
                                                    img={product.img}/>) 
                : <div>{louder}</div>
            }
        </div>
        );
}

export default Catalog;