import React from 'react';
import Logo from '../svg_icons/logo.svg';
import SmallLogo from '../svg_icons/logoSmall.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-full bg-grey-light">
            <div className="container py-4 min-w-max flex flex-row justify-between items-center">
                <NavLink to="/" className="">
                    <img src={Logo} alt="Book Garden Logo" className="hidden md:inline h-9" />
                    <img src={SmallLogo} alt="Book Garden Logo" className="md:hidden inline h-9" />
                </NavLink>
                <p className="">&#169; 2024 Book Garden</p>
            </div>
        </footer>
    )
}

export default Footer