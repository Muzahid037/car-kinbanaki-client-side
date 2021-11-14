import React from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = ({ product }) => {
    const { _id, name, img, des, price } = product;

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://protected-wave-67020.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');

                        // const ordersAfterDlt = myOrders.filter(myOrder => myOrder._id !== _id);
                        // setMyOrders(ordersAfterDlt);
                    }
                })
        }
    }


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
                            <button onClick={()=> handleDeleteProduct(_id)} className="btn btn-danger">Delete</button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ManageProduct;