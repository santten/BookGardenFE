import React from 'react';
import { Link as NavLink } from 'react-router-dom';

import Logo from '../svg_icons/logo.svg';
import Search from '../svg_icons/search.svg';
import Cart from '../svg_icons/cart.svg';
import Arrow from '../svg_icons/arrow.svg';

function NavBar() {

    return (
        <div className="sticky top-0 bg-white">
            <div className="m-auto py-[12px] px-0 min-w-max max-w-[90vw] flex flex-row">
                <NavLink to="/" className="basis-auto self-center p-0 m-0 place-content-start"><img src={Logo} alt="Book Garden Logo" className="m-0 p-0"></img></NavLink>

                <div className="ml-4 grow-[2] mr-4 basis-1/2 font-bold grid grid-cols-3 self-center text-center place-content-center">
                    <NavLink to="/" className="hover:text-accent">Home</NavLink>
                    <NavLink to="/store" className="hover:text-accent">Store</NavLink>
                    <NavLink to="/contacts" className="hover:text-accent">Contacts</NavLink>
                </div>

                <div className="basis-1/5 grid grid-cols-3 gap-[4px] self-center pr-[78px] place-content-end">
                    <NavLink className="self-center w-[32px]" to="/search"><img src={Search} alt="Search Icon"></img></NavLink>
                    <NavLink className="self-center w-[32px]" to="/cart"><img src={Cart} alt="Shopping Cart Icon"></img></NavLink>
                    <NavLink className="font-semibold text-white bg-black w-[122px] h-10 grid grid-cols-[1fr_1fr] gap-[4px] px-6 py-2 rounded-[99px] hover:bg-primary-dark" to="/login"><p className="min-w-min text-base">Login</p><img className="h-full" src={Arrow} alt="arrow right"></img></NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar
