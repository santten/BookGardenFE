import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';

function SearchModal() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`browse/search/${query}/page/1`)
    };

    return (
        <div className="md:absolute flex-col md:flex-row md:left-0 z-[2] md:top-[2.5rem] bg-grey-light md:bg-white md:rounded-b-[0.75rem] p-[1rem]">
            <span className="font-title text-xl">Search</span>
            <form onSubmit={handleSubmit} className="flex flex-row w-[100%] gap-0 mt-[0.5rem] rounded-[0.5rem]">
                <input value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    className="w-[100%] md:w-[11rem] focus:outline-none border-solid border-grey border bg-white md:bg-grey-light h-[2rem] px-[0.5rem] py-[0.25rem] rounded-l-[0.5rem]"></input>
                <button type="submit" className="flex flex-row items-center justify-center gap-[0.5rem] font-semibold text-white hover:bg-black bg-grey-dark py-[0.5rem] rounded-r-[0.5rem] px-[0.5rem]"><Icon icon="streamline:magnifying-glass-solid"></Icon></button>
            </form>
        </div>
    )
}

export default SearchModal
