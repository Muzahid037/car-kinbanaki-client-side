import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'
const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://protected-wave-67020.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(product => {
                setProduct(product);
            })
    }, [])

    const { _id, name, img, des } = product;

    const { user } = useAuth();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.product = product;
        data.status = "Pending";
        //console.log(data);

        axios.post('https://protected-wave-67020.herokuapp.com/orders', data)
            .then(res => {
                console.log("res from client: ", res);
                if (res.data.insertedId) {
                    alert('Order added');
                    reset();
                }
            }
            )
    }

    //console.log(watch("name")); // watch input value by passing the name of it

    return (
        <div>
            {/* <h2>purchase {product._id}</h2> */}

            <div className="d-flex align-items-center justify-content-center">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                <div className="col">
                    <div className="card h-100">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={img} className="card-img-top w-50" alt="..." />
                        </div>
                        
                        <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center">
                            <h5 className="card-title">{name}</h5>
                            </div>
                            <p className="card-text">{des}</p>
                        </div>
                        

                        {/* <div className="card-footer">

                         <Link to={`/placeorder/${_id}`}>
                        <button className="btn-primary">Purchase</button>
                    </Link> 
                    </div> */}

                    </div>
                </div>
            </div>
            </div>

            <div className="">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex align-items-center justify-content-center">
                        <input className="my-4 w-50" placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <input className="my-4 w-50" placeholder="Email" defaultValue={user.email} {...register("email")} />
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <input className="my-4 w-50" placeholder="Enter Address" {...register("address", { required: true })} />
                        {errors.address && <span className="error">This field is required</span>}
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <input className="my-4 w-50" placeholder="Enter Mobile" {...register("mobile", { required: true })} />
                        {errors.mobile && <span className="error">This field is required</span>}
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <input className="my-4 w-50" placeholder="Enter Date" {...register("date", { required: true })} />
                        {errors.date && <span className="error">This field is required</span>}
                    </div>

                    <div className="d-flex align-items-center justify-content-center">
                        <input className="login-submit my-4 w-50" type="submit" value="Place Order" />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default Purchase;