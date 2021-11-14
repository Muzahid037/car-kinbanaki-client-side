import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://protected-wave-67020.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="my-5 section">
            <div className="">
                <h2>Our Best products</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {products.map(product => <Product
                    key={product._id}
                    product={product}
                >
                </Product>
                )}
            </div>

        </div >
    );
};

export default Explore;