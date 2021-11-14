import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import deliveryBoySleep from './../../images/sleeping.jpg'

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://protected-wave-67020.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [myOrders])


    return (
        <div>

            {myOrders.length > 0 &&
                <>
                    <h2>My Orders</h2>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 ">
                        {
                            myOrders.map(myOrder => <MyOrder
                                key={myOrder._id}
                                myOrder={myOrder}
                            // myOrders={myOrders}
                            // setMyOrders={setMyOrders}
                            >
                            </MyOrder>)
                        }
                    </div>
                </>
            }
            {myOrders.length === 0 && <>
                <h2>No order Available....Delivary Boy Is Sleeping</h2>
                <img src={deliveryBoySleep} alt="" />
            </>
            }
        </div>
    );
};

export default MyOrders;