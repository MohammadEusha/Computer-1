import { faCheckCircle, faHourglassStart, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';


const AllOrdersDetails = (props) => {
    const { status, _id, name, title, description, price, orderTime } = props.allOrder

    const [orderServices, setOrderServices] = useState([]);
    console.log(orderServices);

    useEffect(() => {
        fetch('https://young-beach-67366.herokuapp.com/cart')
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, [])


    const handleUpdate = (status, id) => {
        fetch(`https://young-beach-67366.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        console.log(status, id)
    }
    return (
        <div className="mt-3">
            <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Customer Name : {name} </span></li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Service Name : {title} </span> </li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Service Price : {price} $</span> </li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Description : {description}</span> </li>
                <li className="list-group-item "><span className="fw-bolder text-dark">Orders Placed At : {(new Date(orderTime).toDateString('dd/MM/yyyy'))}</span> </li>
                <li className="list-group-item ">
                    {status !== "pending" && <button onClick={() => handleUpdate('Pending', _id)} className="btn btn-outline-secondary fw-bold text-dark"><FontAwesomeIcon icon={faHourglassStart} /> Pending</button>}
                    {status !== "on going" && <button onClick={() => handleUpdate('On Going', _id)} className="btn btn-outline-secondary fw-bold ms-3 text-dark"><FontAwesomeIcon icon={faRocket} /> On Going</button>}
                    {status !== "done" && <button onClick={() => handleUpdate('Done', _id)} className="btn btn-outline-secondary text-dark fw-bold ms-3"><FontAwesomeIcon icon={faCheckCircle} /> Done</button>}
                </li>

            </ul>
        </div>
    );
};

export default AllOrdersDetails;