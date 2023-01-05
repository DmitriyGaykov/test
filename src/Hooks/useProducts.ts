import react, { useEffect, useState } from 'react';
import {IProduct} from '../Components/Catalog/IProduct';
import axios from 'axios';

const useProducts = () => {
    const [products, setProducts] = useState([] as IProduct[]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    });

    return { products, loading };
}

const getProducts = async () => {
    const response =  await axios.get<IProduct[]>('http://localhost:3000/products.json');
    return response?.data;
}

export default useProducts;