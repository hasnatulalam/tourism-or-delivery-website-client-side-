import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //const url = `https://scary-goblin-67655.herokuapp.com/orders`;
         const url = `https://fathomless-forest-21585.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })
    }, [])

    const handleApproveOrder = (id) => {
        console.log(id);
        const updatedorder = orders.find(order => order._id === id);
        updatedorder.status = 'approved';

       // const url = `https://scary-goblin-67655.herokuapp.com/approve/${id}`;
         const url = `https://fathomless-forest-21585.herokuapp.com/approve/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedorder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved Successfully');

                    const remaining = orders.filter(order => order._id !== id);
                    remaining.push(updatedorder);
                    setOrders(remaining);
                }
            })
    }

    const handleCancelOrder = (id) => {
        console.log(id);
        const url = `https://fathomless-forest-21585.herokuapp.com/deleteOrder/${id}`
        //const url = `https://scary-goblin-67655.herokuapp.com/deleteOrder/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('successfullly canceled!')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })

    }

    return (
        <div className='container mt-5'>
            {
                !loading ?
                    orders.map(order => <ManageOrder
                        key={order._id}
                        order={order}
                        handleApproveOrder={handleApproveOrder}
                        handleCancelOrder={handleCancelOrder}
                    ></ManageOrder>)
                    :
                    <div className='container text-center mt-5'>
                        <Spinner animation="border" variant="dark" />
                    </div>
            }
        </div>
    );
};

export default ManageOrders;