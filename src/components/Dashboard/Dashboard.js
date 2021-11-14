import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from '../../context/AuthProvider';
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import Explore from '../Explore/Explore';
import Home from '../Home/Home';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ReviewAdd from '../ReviewAdd/ReviewAdd';
import './Dashboard.css'
const Dashboard = () => {
    const { user, logOut } = useAuth();
    
    const [userFromdb, setUserFromdb] = useState({});
    useEffect(() => {
        fetch(`https://protected-wave-67020.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(user => {
                console.log(user);
                setUserFromdb(user);
            })
    }, [userFromdb])


    return (
        <div>
            {/* <h2>dashboard</h2> */}

            <div className="row">

                {!userFromdb.isAdmin &&
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">

                        <Link to="/dashboard/myorders">
                            <div className="d-flex align-items-center justify-content-center my-5">
                                <button type="button" className="w-100 d-block btn btn-success btn-lg">My Orders</button>
                            </div>
                        </Link>

                        <Link to="/dashboard/pay">
                            <div className="d-flex align-items-center justify-content-center mb-5">
                                <button type="button" className="w-100 d-block btn btn-secondary btn-lg">Pay</button>
                            </div>
                        </Link>


                        <Link to="/dashboard/review">
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="button" className="w-100 d-block btn btn-warning btn-lg">Review</button>
                            </div>
                        </Link>


                        <Link to="/dashboard/">
                            <div className="d-flex align-items-center justify-content-center my-5">
                                <button onClick={logOut} type="button" className="w-100 d-block btn btn-danger btn-lg mb-5">Logout</button>
                            </div>
                        </Link>


                    </div>
                }

                {userFromdb.isAdmin &&
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">

                        <Link to="/dashboard/manageAllOrders">
                            <div className="d-flex align-items-center justify-content-center my-5">
                                <button type="button" className="w-100 d-block btn btn-success btn-lg">Manage All Orders</button>
                            </div>
                        </Link>

                        <Link to="/dashboard/addProduct">
                            <div className="d-flex align-items-center justify-content-center mb-5">
                                <button type="button" className="w-100 d-block btn btn-secondary btn-lg">Add Product</button>
                            </div>
                        </Link>


                        <Link to="/dashboard/makeAdmin">
                            <div className="d-flex align-items-center justify-content-center mb-5">
                                <button type="button" className="w-100 d-block btn btn-warning btn-lg">Manage Admin</button>
                            </div>
                        </Link>

                        <Link to="/dashboard/manageProducts">
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="button" className="w-100 d-block btn btn-primary btn-lg">Manage Products</button>
                            </div>
                        </Link>


                        <Link to="/">
                            <div className="d-flex align-items-center justify-content-center my-5">
                                <button onClick={logOut} type="button" className="w-100 d-block btn btn-danger btn-lg mb-5">Logout</button>
                            </div>
                        </Link>


                    </div>
                }


                <div className="col-8 col-sm-8 col-md-8 col-lg-8">



                    <Route exact path="/dashboard">

                    {!userFromdb.isAdmin && <MyOrders></MyOrders> }

                    {userFromdb.isAdmin && <ManageAllOrders></ManageAllOrders> }

                    </Route>

                    <Route exact path="/dashboard/myorders">
                        <MyOrders></MyOrders>
                    </Route>

                    <Route path="/dashboard/manageAllOrders">
                        <ManageAllOrders></ManageAllOrders>
                    </Route>

                    <Route path="/dashboard/addProduct">
                        <AddProduct></AddProduct>
                    </Route>

                    <Route path="/dashboard/makeAdmin">
                        <MakeAdmin></MakeAdmin>
                    </Route>

                    <Route path="/dashboard/manageProducts">
                        <ManageProducts></ManageProducts>
                    </Route>
                    
                    <Route path="/dashboard/pay">
                        <Payment></Payment>
                    </Route>

                    <Route path="/dashboard/review">
                        <ReviewAdd></ReviewAdd>
                    </Route>


                   




                </div>
            </div>








            {/* <Link to="">
                <button onClick={logOut} type="button" className="btn btn-danger btn-lg">Logout</button>
            </Link> */}


        </div>
    );
};

export default Dashboard;