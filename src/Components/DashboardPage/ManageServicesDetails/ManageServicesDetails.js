import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageServicesDetails = (props) => {
    const { _id, title, price, description } = props.services
    const handleDelete = (id) => {
        fetch(`https://young-beach-67366.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted')
            })
        console.log(id)
    }
    return (
        <div>
            <div className="m-5">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-dark"><span className="fw-bolder text-dark">Service Name : {title} </span></li>
                    <li className="list-group-item "><span className="fw-bolder text-dark">Service Price : {price} $</span> </li>
                    <li className="list-group-item "><span className="fw-bolder text-dark">Service Description : {description}</span> </li>
                    <li onClick={() => handleDelete(_id)} className="list-group-item "><span className="btn btn-outline-secondary fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Service</span></li>

                </ul>
            </div>
        </div>
    );
};

export default ManageServicesDetails;