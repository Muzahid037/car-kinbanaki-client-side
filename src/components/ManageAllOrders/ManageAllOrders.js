import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import deliveryBoySleep from './../../images/sleeping.jpg'
const ManageAllOrders = () => {
    
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://protected-wave-67020.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    

    return (
       <div>

            {orders.length > 0 &&
                <>
                    <h2>Manage all orders</h2>


                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1">
                        {
                            orders.map(order => <ManageAllOrder
                                key={order._id}
                                order={order}
                            >
                            </ManageAllOrder>)
                        }
                    </div>
                </>
            }
            {orders.length === 0 && <>
                <h2>No order Available....Delivary Boy Is Sleeping</h2>
                <img src={deliveryBoySleep} alt="" />
            </>
            }
        </div>
    );
};

export default ManageAllOrders;