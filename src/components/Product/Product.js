import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, des ,price} = product;
    return (
        <div className="my-5">
            {/* <h2>service {id}</h2> */}


            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center">
                        <h5 className="card-title">{name}</h5>
                        </div>
                        <p className="card-text">{des}</p>
                    </div>
                    <div className="card-footer">

                        <div className="d-flex align-items-center justify-content-evenly">
                            <h5 className="text-warning">${price}</h5>
                            <Link to={`/purchase/${_id}`}>
                                <button className="btn-primary">Purchase</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Product;