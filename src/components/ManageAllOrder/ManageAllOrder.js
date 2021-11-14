import React from 'react';

const ManageAllOrder = ({ order }) => {
    const { _id, name, email, product, status } = order;
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://protected-wave-67020.herokuapp.com/orders/${id}`, {
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


    const handleUpdateUser = (id) => {
        order.status = "Shipped";
        // console.log("Update",_id);
        fetch(`https://protected-wave-67020.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) { alert('Status Updated successfully') }
            });

    }



    return (
        <div>
            {/* <h2>single mang all oders</h2> */}

            <div className="col d-flex align-items-center justify-content-center my-5 ">
                <div className="card h-100 border border-5">

                    <div className="d-flex align-items-center justify-content-center">
                        <img src={product.img} className="card-img-top w-50" alt="..." />
                    </div>

                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center">
                            <h5 className="card-title">{product.name}</h5>
                        </div>
                        <p className="card-text">{product.des.substring(0, 91)}...</p>

                        <div className="d-flex align-items-center justify-content-between">
                            <p>Ordered by: <span className="fw-bold text-danger">{name}</span></p>
                            <p>Status: <span className="fw-bold text-success"> {status} </span></p>
                        </div>
                    </div>


                    <div className="card-footer">

                        <div className="d-flex justify-content-evenly">
                            <button className="btn btn-danger" onClick={() => handleDeleteOrder(_id)}>Delete</button>
                            <button className="btn btn-primary" onClick={() => handleUpdateUser(_id)} >Shipped</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ManageAllOrder;