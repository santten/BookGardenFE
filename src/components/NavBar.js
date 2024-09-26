import React, { useState } from 'react';
import "../index.css"

import Logo from '../svg_icons/logo.svg';
import SmallLogo from '../svg_icons/logoSmall.svg';
import SearchModal from './SearchModal';

import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const toggleModal = (bool) => {
        setSearchModalOpen(bool);
    };

    return (
        <header className="sticky top-0 bg-white z-[999] h-[4rem] flex flex-col">
            <nav className="my-[0.75rem] container flex md:grid md:grid-cols-[1fr_1fr_1fr] justify-between items-center">
                {/* logo */}
                <NavLink onClick={() => toggleModal(false)} to="/" className="hidden md:inline"><img src={Logo} alt="Book Garden Logo" className="h-9"></img></NavLink>
                <NavLink onClick={() => toggleModal(false)} to="/" className="inline md:hidden"><img src={SmallLogo} alt="Book Garden Logo" className="h-9"></img></NavLink>

                <div id="middlenavlinks" className="hidden md:flex mx-auto align-center justify-center items-center gap-16 font-bold">
                    <NavLink onClick={() => toggleModal(false)} to="/" className="hover:text-primary-dark pt-2 pb-1 px-4">Home</NavLink>
                    <NavLink onClick={() => toggleModal(false)} to="/browse/all/page/1" className="hover:text-primary-dark pt-2 pb-1 px-4">Store</NavLink>
                    <NavLink onClick={() => toggleModal(false)} to="/contacts" className="hover:text-primary-dark pt-2 pb-1 px-4">Contacts</NavLink>
                </div>

                <div className="flex flex-row ml-auto gap-[1rem] md:gap-[2rem] items-center">
                    <div className="hidden md:flex md:relative leading-none p-0 m-0">
                        <button onClick={() => toggleModal(!searchModalOpen)} className="leading-none p-0 m-0">
                            <Icon icon="streamline:magnifying-glass-solid" width="30px" className="md:inline hidden text-black hover:text-primary-dark" />
                        </button>
                        {searchModalOpen && <SearchModal />}
                    </div>

                    <NavLink onClick={() => toggleModal(false)} to="/cart">
                        <Icon icon="material-symbols:shopping-cart" width="26px" className="md:hidden inline text-black hover:text-primary-dark" />
                        <Icon icon="material-symbols:shopping-cart" width="32px" className="md:inline hidden text-black hover:text-primary-dark" />
                    </NavLink>

                    <NavLink onClick={() => toggleModal(false)} className="hidden md:flex flex-row gap-[4px] items-center align-center font-semibold text-white bg-black max-w-[122px] px-[1.5rem] py-[0.5rem] rounded-[99px] hover:bg-primary-dark" to="/login" >
                        <p>Login</p>
                        <Icon icon="tdesign:arrow-right" width="24px" />
                    </NavLink>

                    <button onClick={toggleMenu} className="md:hidden">
                        <Icon icon="charm:menu-hamburger" width="30px" />
                    </button>
                </div>
            </nav>

            <div className={`${isMenuOpen ? 'flex' : 'hidden'} bg-grey-light flex-col pb-[1.5rem] gap-[1.5rem] md:hidden`}>
                <SearchModal />
                <NavLink to="/" onClick={closeMenu} className="block px-4 font-semibold">Home</NavLink>
                <NavLink to="/browse/all/pages/1" onClick={closeMenu} className="block px-4 font-semibold">Store</NavLink>
                <NavLink to="/contacts" onClick={closeMenu} className="block px-4 font-semibold">Contacts</NavLink>
                <NavLink to="/login" onClick={closeMenu} className="block px-4 font-semibold">Login</NavLink>
            </div>

        </header>
    );
}

export default NavBar;

