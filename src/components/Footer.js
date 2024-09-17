import React from 'react'
import Logo from '../svg_icons/logo.svg';

function Footer() {
    return (
        <div className="w-full h-[68px] bg-grey-light mt-auto">
            <div className="m-auto py-[12px] px-0 min-w-max max-w-[90vw] gap-[50vw] flex flex-row">
                <div className="basis-auto self-center p-0 m-0 place-content-start w-[20vw]"><img src={Logo} alt="Book Garden Logo"></img></div>
                <p className="basis-auto text-gray-500 self-center p-0 m-0 place-content-start w-[20vw]">&#169; 2024 Book Garden</p>
            </div>
        </div>
    )
}

export default Footer