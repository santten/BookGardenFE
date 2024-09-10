import Filtering from './Filtering'
import ProductCard from './ProductCard'
import { useState } from 'react'
import { Icon } from '@iconify/react';


// imports static list from files, config database interaction asap when possible 
import bookArray from '../temporary_mock_data'

function ProductList({ category }) {
    // remove mb 100px when pagination is ok
    const [sorting, setSorting] = useState('')

    const changeSorting = (evt) => {
        setSorting(evt.target.value)
        console.log(sorting, "sorting", typeof sorting)
    }

    return (
        <div className="grid grid-cols-[20%_auto] gap-[4rem] mb-[100px] max-w-[90vw] ml-auto mr-auto">
            <div>
                <Filtering />
            </div>
            <div>
                {/* the auto value is just something until I know how the dropdown will be like */}
                <header className="grid grid-cols-[auto_300px]">
                    <h3 className="font-title text-[40px]">{category}</h3>
                    <section>
                        <label htmlFor="sortSelect">Sort by:&nbsp;&nbsp;</label>
                        <select className="bg-grey-light px-[1rem] py-[0.25rem] rounded-[16px] appearance-none" name="sortSelect" onChange={changeSorting}>
                            <option value="ALPHABET">Alphabetical</option>
                            <option value="DES_rating">Highest Rating</option>
                            <option value="ASC_rating">Lowest Rating</option>
                            <option value="DES_price">Highest Price</option>
                            <option value="ASC_price">Lowest Price</option>
                        </select>
                    </section>
                </header>
                <main className="flex flex-row flex-wrap gap-[40px]">
                    {/*reminder: ask about default sorting*/}

                    {bookArray.filter((item) =>
                        item
                    ).sort((a, b) => {
                        switch (sorting) {
                            case "ALPHABET": return a.title > b.title
                            case "ASC_price": return a.price > b.price
                            case "DES_price": return a.price < b.price
                            case "ASC_rating": return a.rating > b.rating
                            case "DES_rating": return a.rating < b.rating
                            default: return a.id > b.id
                        }
                    }

                    ).map((item) => {
                        return <ProductCard key={item.id} item={item} />
                    })}
                </main>
            </div>
        </div>
    )
}

export default ProductList