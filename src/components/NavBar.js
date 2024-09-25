import React, { useState } from 'react';
import "../index.css"

import Logo from '../svg_icons/logo.svg';

import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 bg-white z-[999]">
            <nav className="py-[12px] container flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className=""><img src={Logo} alt="Book Garden Logo" className="h-9"></img></NavLink>

                <div id="middlenavlinks" className="hidden md:flex gap-16 font-bold">
                    <NavLink to="/" className="hover:text-primary-dark pt-2 pb-1 px-4">Home</NavLink>
                    <NavLink to="/browse/all/page/1" className="hover:text-primary-dark pt-2 pb-1 px-4">Store</NavLink>
                    <NavLink to="/contacts" className="hover:text-primary-dark pt-2 pb-1 px-4">Contacts</NavLink>
                </div>

                <div className="flex gap-5 items-center">
                    <NavLink className="w-[32px]" to="/search" >
                        <Icon icon="streamline:magnifying-glass-solid" width="30px" className="text-black hover:text-primary-dark" />
                    </NavLink>
                    <NavLink className="w-[32px]" to="/cart" >
                        <Icon icon="material-symbols:shopping-cart" width="32px" className="text-black hover:text-primary-dark" />
                    </NavLink>
                    <NavLink className="font-semibold text-white bg-black w-[122px] h-10 grid grid-cols-[1fr_1fr] gap-[4px] px-6 py-2 rounded-[99px] hover:bg-primary-dark" to="/login" >
                        <p className="min-w-min text-base">Login</p>
                        <Icon icon="tdesign:arrow-right" width="24px" className="h-full" />
                    </NavLink>
                </div>

                <button onClick={toggleMenu} className="md:hidden">
                    <Icon icon="charm:menu-hamburger" width="30px" />
                </button>
            </nav>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
                <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100">Home</NavLink>
                <NavLink to="/store" className="block px-4 py-2 hover:bg-gray-100">Store</NavLink>
                <NavLink to="/contacts" className="block px-4 py-2 hover:bg-gray-100">Contacts</NavLink>
            </div>
        </header>
    );
}

export default NavBar;

