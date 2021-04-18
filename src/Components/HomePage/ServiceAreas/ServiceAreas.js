import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';


const ServiceAreas = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 style={{ fontSize: "65px" }}>Services We Provide</h1>
                <p className="fs-4 me-5 ms-5">Explore Our Completed Services! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aspernatur amet eaque blanditiis fuga laudantium sunt veritatis necessitatibus ratione repudiandae, iusto incidunt enim. Voluptate perferendis, soluta consectetur repudiandae facilis er......Expert!!!!!!!!</p>
            </div>

            <div className="row d-flex justify-content-center">
                {
                    services.map(service => <ServiceInfo service={service}  ></ServiceInfo>)
                }
            </div>
        </div>

    );
};

export default ServiceAreas;