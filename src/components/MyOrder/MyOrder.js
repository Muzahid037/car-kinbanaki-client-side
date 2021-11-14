import React from 'react';

const MyOrder = ({ myOrder }) => {

    const { _id, name, email, product, status } = myOrder;

    const handleRemoveOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            fetch(`https://protected-wave-67020.herokuapp.com/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                    }
                })
        }
    }

    return (
        <div>
            {/* <h2>My single Order id {_id}</h2> */}

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
                    </div>


                    <div className="card-footer">

                        <div className="d-flex align-items-center justify-content-evenly">
                             <p>Status: <span className="fw-bold text-success"> {status} </span></p>
                            <button className="btn btn-primary" onClick={() => handleRemoveOrder(_id)}>Remove Order</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyOrder;