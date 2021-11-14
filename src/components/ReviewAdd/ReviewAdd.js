import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ReviewAdd = () => {
    //const { _id, name, img, des } = product;
    const { user } = useAuth();

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
         data.reviewer = user.displayName;
        // data.rating = 

        //console.log(data);

        axios.post('https://protected-wave-67020.herokuapp.com/reviews', data)
            .then(res => {
                console.log("res from client: ", res);
                if (res.data.insertedId) {
                    alert('Feedback added');
                    reset();
                }
            }
            )
    }


    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

               
                    <textarea className="my-4" placeholder="Write Your Comment" {...register("comment", { required: true })} />
                    {errors.comment && <span className="error">This field is required</span>}
                    

                
                    <input className="my-4" placeholder="Rate us out of 5" {...register("rating", { required: true })} />
                    {errors.rating && <span className="error">This field is required</span>}
               

                
                    <input className="login-submit my-4" type="submit" value="Submit" />
               

            </form>
        </div>
    );
};

export default ReviewAdd;