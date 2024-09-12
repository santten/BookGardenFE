import ProductCard from './ProductCard'
import { useState } from 'react'
import ReactSlider from 'react-slider'
import React from 'react';
import { Icon } from '@iconify/react';

// imports static list from files, config database interaction asap when possible 
import bookArray from '../temporary_mock_data'

function ProductList() {
    // remove mb 100px when pagination is ok
    const [sorting, setSorting] = useState('')
    const [priceFilter, setPriceFilter] = useState([1, 999])

    const [category, setCategory] = useState('Category Name')

    const changeSorting = (evt) => {
        setSorting(evt.target.value)
    }

    // ask how genres will be passed in database 

    let genrelist = []
    bookArray.forEach(element => {
        if (!(genrelist.includes(element.genre))) { genrelist.push(element.genre) }
    });

    const handleFiltering = (item) => {
        const priceCheck = ((priceFilter[0] < item.price) && (priceFilter[1] > item.price))
        const categoryCheck = (item.genre === category)
        return (priceCheck && categoryCheck)
    }

    return (
        <div className="grid grid-cols-[20%_auto] gap-[4rem] mb-[100px] max-w-[90vw] ml-auto mr-auto">
            <div>
                <section className="bg-grey-light rounded-[32px] min-h-[10rem] p-[1rem]">
                    <h5 className="font-title text-[1.5rem]">Price</h5>
                    <div className="h-[30px]">
                        <ReactSlider
                            orientation="horizontal"
                            className="bg-[#454545]"
                            thumbClassName="text-grey-dark hover:text-primary-dark"
                            trackClassName="bg-grey rounded-[2px] m-[2px] p-[4px]"
                            max={999}
                            min={1}
                            minDistance={1}
                            defaultValue={[1, 999]}
                            ariaLabelledby={['minimum-price', 'maximum-price']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => {
                                return <>
                                    <Icon {...props} icon="fluent-mdl2:slider-thumb" />
                                </>
                                /* <div {...props}>{state.valueNow}</div> */
                            }}
                            onAfterChange={(value, thumbIndex) => {
                                setPriceFilter(value)
                            }}
                            withTracks={true}
                        /></div>
                    <h5 className="font-title text-[1.5rem]">Category</h5>
                    {genrelist.map((item) => {
                        return <p className="hover:text-primary-dark" onClick={() => setCategory(item)}>{item}</p>
                    })}
                </section>
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
                    {bookArray.filter(handleFiltering).sort((a, b) => {
                        switch (sorting) {
                            case "ALPHABET": return a.title > b.title
                            case "ASC_price": return a.price > b.price
                            case "DES_price": return a.price < b.price
                            case "ASC_rating": return a.rating > b.rating
                            case "DES_rating": return a.rating < b.rating
                            default: return a.id > b.id
                        }
                    }).map((item) => {
                        return <ProductCard key={item.id} item={item} />
                    })}
                </main>
            </div>
        </div>
    )
}

export default ProductList