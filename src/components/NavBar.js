import React from 'react';
import "../index.css"

import Logo from '../svg_icons/logo.svg';

import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';


function NavBar() {

    return (
        <div className="sticky top-0 bg-white z-[999]">
            <nav className="m-auto py-[12px] px-0 min-w-max max-w-[90vw] flex flex-row">
                <NavLink to="/" className="basis-auto self-center p-0 m-0 place-content-start"><img src={Logo} alt="Book Garden Logo" className="m-0 p-0"></img></NavLink>

                <div id="middlenavlinks" className="ml-4 grow-[2] mr-4 basis-1/2 font-bold grid grid-cols-3 self-center text-center place-content-center">
                    <p><NavLink to="/" className="hover:text-primary-dark">Home</NavLink></p>
                    <p><NavLink to="/store" className="hover:text-primary-dark">Store</NavLink></p>
                    <p><NavLink to="/contacts" className="hover:text-primary-dark">Contacts</NavLink></p>
                </div>

                <div className="basis-1/5 grid grid-cols-3 gap-[4px] self-center pr-[78px] place-content-end">
                    <NavLink className="self-center w-[32px]" to="/search" ><Icon icon="streamline:magnifying-glass-solid" width="30px" className="text-black hover:text-primary-dark" /></NavLink>
                    <NavLink className="self-center w-[32px]" to="/cart" ><Icon icon="material-symbols:shopping-cart" width="32px" className="text-black hover:text-primary-dark" /></NavLink>
                    <NavLink className="font-semibold text-white bg-black w-[122px] h-10 grid grid-cols-[1fr_1fr] gap-[4px] px-6 py-2 rounded-[99px] hover:bg-primary-dark" to="/login" ><p className="min-w-min text-base">Login</p><Icon icon="tdesign:arrow-right" width="24px" className="h-full" /></NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
