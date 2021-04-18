import React from 'react';
import repair from '../../../Images/service 1.jpg'

const Repair = () => {
    return (
        <div className="row offset-md-1 mt-5 ">
            <div className="col-md-6">
                <img className="img-fluid" src={repair} alt="" />
            </div>
            <div className="col-md-6 ">
                <h1 style={{ fontSize: "70px" }}>Repair Services For Your Computer.</h1>
                <div class="form-check   fs-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </label>
                </div>
                <div class="form-check  fs-5">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </label>
                </div>
                <p className="fs-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus dicta molestias iste tempora animi veniam corrupti tenetur architecto adipisci perspiciatis, dolores quis aperiam porro quam recusandae voluptate ipsum incidunt.</p>
            </div>
        </div>
    );
};

export default Repair;