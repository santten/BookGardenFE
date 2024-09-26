import React from 'react';
import "../index.css";
import Logo from '../svg_icons/logo.svg';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

function NavBar({ isAuthenticated }) {

    return (
        <header className="sticky top-0 bg-white z-[999]">
            <nav className="py-[12px] min-w-max flex flex-row container justify-between">
                <NavLink to="/" className=""><img src={Logo} alt="Book Garden Logo" className="h-9"></img></NavLink>

                <div id="middlenavlinks" className="flex flex-row gap-16 font-bold self-center">
                    <p><NavLink to="/" className="hover:text-primary-dark pt-2 pb-1 px-4">Home</NavLink></p>
                    <p><NavLink to="/store" className="hover:text-primary-dark pt-2 pb-1 px-4">Store</NavLink></p>
                    <p><NavLink to="/contacts" className="hover:text-primary-dark pt-2 pb-1 px-4">Contacts</NavLink></p>
                </div>

                <div className="flex flex-row gap-5 self-center">
                    <NavLink className="self-center w-[32px]" to="/search" ><Icon icon="streamline:magnifying-glass-solid" width="30px" className="text-black hover:text-primary-dark" /></NavLink>
                    <NavLink className="self-center w-[32px]" to="/cart" ><Icon icon="material-symbols:shopping-cart" width="32px" className="text-black hover:text-primary-dark" /></NavLink>

                    {isAuthenticated ? (
                        // If user login, show "My Account" button
                        <NavLink className="font-semibold text-white bg-black w-[122px] h-10 grid grid-cols-[1fr_1fr] gap-[4px] px-6 py-2 rounded-[99px] hover:bg-primary-dark" to="/account">
                            <p className="min-w-min text-base">Account</p>
                            <Icon icon="tdesign:arrow-right" width="24px" className="h-full" />
                        </NavLink>
                    ) : (
                        // If user NOT login, show  "Login" button
                        <NavLink className="font-semibold text-white bg-black w-[122px] h-10 grid grid-cols-[1fr_1fr] gap-[4px] px-6 py-2 rounded-[99px] hover:bg-primary-dark" to="/login">
                            <p className="min-w-min text-base">Login</p>
                            <Icon icon="tdesign:arrow-right" width="24px" className="h-full" />
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;

// import React from 'react';
// import "../index.css"

// import Logo from '../svg_icons/logo.svg';

// import { NavLink } from 'react-router-dom';
// import { Icon } from '@iconify/react';


// function NavBar() {

//     return (
//         <header className="sticky top-0 bg-white z-[999]">
//             <nav className="py-[12px] min-w-max flex flex-row container justify-between">
//                 <NavLink to="/" className=""><img src={Logo} alt="Book Garden Logo" className="h-9"></img></NavLink>

//                 <div id="middlenavlinks" className="flex flex-row gap-16 font-bold self-center">
//                     <p><NavLink to="/" className="hover:text-primary-dark pt-2 pb-1 px-4">Home</NavLink></p>
//                     <p><NavLink to="/store" className="hover:text-primary-dark pt-2 pb-1 px-4">Store</NavLink></p>
//                     <p><NavLink to="/contacts" className="hover:text-primary-dark pt-2 pb-1 px-4">Contacts</NavLink></p>
//                 </div>

//                 <div className="flex flex-row gap-5 self-center">
//                     <NavLink className="self-center w-[32px]" to="/search" ><Icon icon="streamline:magnifying-glass-solid" width="30px" className="text-black hover:text-primary-dark" /></NavLink>
//                     <NavLink className="self-center w-[32px]" to="/cart" ><Icon icon="material-symbols:shopping-cart" width="32px" className="text-black hover:text-primary-dark" /></NavLink>
//                     <NavLink className="font-semibold text-white bg-black w-[122px] h-10 grid grid-cols-[1fr_1fr] gap-[4px] px-6 py-2 rounded-[99px] hover:bg-primary-dark" to="/login" ><p className="min-w-min text-base">Login</p><Icon icon="tdesign:arrow-right" width="24px" className="h-full" /></NavLink>
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default NavBar
