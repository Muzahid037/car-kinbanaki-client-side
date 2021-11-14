import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // data.email = user.email;
        console.log(data);

        axios.post('https://protected-wave-67020.herokuapp.com/products', data)
            .then(res => {
                console.log("res from client: ",res);
                if (res.data.insertedId) {
                    alert('product added');
                    reset();
                }
            }
            )
    }

    //console.log(watch("name")); // watch input value by passing the name of it

    return (
        <div>
            <h2>Add product</h2>

           
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                    <input className="my-4" placeholder="Name"  {...register("name",{ required: true })} />
                    {errors.name && <span className="error">This field is required</span>}
    

                    <textarea className="my-4" placeholder="Enter Description" {...register("des", { required: true })} />
                    {errors.des && <span className="error">This field is required</span>}

                    <input className="my-4" placeholder="Enter Image Url" defaultValue={"https://i.ibb.co/VWqqWG6/1.jpg"} {...register("img", { required: true })} />
                    {errors.img && <span className="error">This field is required</span>}

                    <input className="my-4" placeholder="Price"  {...register("price", { required: true })} />
                    {errors.price && <span className="error">This field is required</span>}

                    
                    <input className="login-submit my-4" type="submit" value="Place Order" />
                </form>
            

        </div>
    );
};

export default AddProduct;