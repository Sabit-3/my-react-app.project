import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css";
import './Footer.css';

const Footer = (props) => {
    return (
        <div>
            <footer className={props.divName}>
                <p>SABIT All Rights Reserved 2023</p>
                <div>
                
                    {/* <Link className={props.divLi} to="/">Home</Link> */}
                    <Link className={props.diva} to="/about">About</Link>
                    {/* <Link className={props.divLi} to="/contact">Contact</Link> */}

                </div>
            </footer>
        </div>
    );
}

export default Footer;
