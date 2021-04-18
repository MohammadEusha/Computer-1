import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from "../../../Images/logo (2).png"
const Footer = () => {
    const ourAddress = [
        { name: "Turkey,Istanbul" },
        { name: "Bacani" },

    ]
    const services = [
        { name: "Laptop Repair" },
        { name: "Computer Repair" },
        { name: "Data Recovery" },
        { name: "Hardware Update" },
    ]
    return (
        <footer className="footer-area clear-both mt-5">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="d-flex ">
                            <img className="transaction-area" style={{ height: "50px" }} src={logo} alt="" />
                            <h3 className="text-light fw-bolder ps-4">Computer Garage</h3>
                        </div>
                        <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio velit dignissimos quidem ipsa voluptatum numquam quis cupiditate quo, natus, illum laudantium? Esse eos, facilis tempore temporibus laboriosam odit asperiores?</p>
                    </div>
                    <FooterCol key={1} menuTitle="Services" menuItems={services} />
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+565465164164</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-light">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;