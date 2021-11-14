import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Product from '../Product/Product';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://protected-wave-67020.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])


    return (
        <div>
            <h2>Manage produxcts</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                    ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;