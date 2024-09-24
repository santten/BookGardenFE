import ProductCard from '../ProductCard';

import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactSlider from 'react-slider';

function ProductList(props) {
    const apiurl = "http://localhost:4000/api/books"
    const [bookArray, setBookArray] = useState([])

    useEffect(() => {
        fetch(apiurl, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setBookArray(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);


    const category = props.category ?? "all"
    const pagenumber = props.pagenumber ?? 1

    const specialcategorylist = ["Best Sellers", "New Arrivals"]
    const newarrivallist = [1, 40, 21, 43, 98]
    const bestsellerlist = [5, 12, 15, 67, 54, 199]

    const [sorting, setSorting] = useState('')
    const [priceFilter, setPriceFilter] = useState([1, 999])
    const [bindingFilter, setBindingFilter] = useState('')
    const [search, setSearch] = useState('')

    const changeSorting = (evt) => {
        setSorting(evt.target.value)
    }

    let genrelist = []
    bookArray.forEach(element => {
        if (!(genrelist.includes(element.genre))) { genrelist.push(element.genre) }
    });

    let bindinglist = []
    bookArray.forEach(element => {
        if (!(bindinglist.includes(element.binding)) && (element.binding !== null)) { bindinglist.push(element.binding) }
    });

    const handleFiltering = (item) => {
        let categoryCheck = ""

        switch (category) {
            case "all":
                categoryCheck = item === item;
                break;
            case "best sellers":
                categoryCheck = bestsellerlist.includes(parseInt(item._id))
                break;
            case "new arrivals":
                categoryCheck = newarrivallist.includes(parseInt(item._id))
                break;
            default:
                categoryCheck = item.genre.toLowerCase() === category.toLowerCase()
                break;
        }

        const priceCheck = ((priceFilter[0] < item.price) && (priceFilter[1] > item.price))
        const bindingCheck = (bindingFilter === '' ? item : item.binding === bindingFilter)

        const searchCheck = (search === '' ? item : item.title.toLowerCase().includes(search.toLowerCase()) || item.author.toLowerCase().includes(search.toLowerCase()))

        return (priceCheck && categoryCheck && bindingCheck && searchCheck)
    }

    let contentPerPage = 20
    let lastContentIndex = pagenumber * contentPerPage
    let firstContentIndex = lastContentIndex - contentPerPage

    const filteredItems = bookArray.filter(handleFiltering).sort((a, b) => {
        switch (sorting) {
            case "ALPHABET": return a.title > b.title
            case "ASC_price": return a.price > b.price
            case "DES_price": return a.price < b.price
            case "ASC_rating": {
                if (a.rating === null) {
                    return 1;
                }
                else if (b.rating === null) {
                    return -1;
                } else {
                    return a.rating > b.rating
                }
            }
            case "DES_rating": return a.rating < b.rating
            case "ASC_year": return a.year > b.year
            case "DES_year": return a.year < b.year
            default: return a._id > b._id
        }
    })

    const displayedItems = filteredItems.slice(firstContentIndex, lastContentIndex).map((item) => {
        return <ProductCard key={"card-" + item._id} item={item} />
    })

    let maxpages = Math.ceil(filteredItems.length / contentPerPage)

    return (
        <div className="containerBig grid grid-cols-[20%_auto] gap-[1.5rem] mb-[100px] mt-6">
            <div>
                <section className="bg-grey-light rounded-[32px] min-h-[10rem] p-[1rem]">
                    <h5 className="font-title text-[1.5rem] mb-[0.5rem]">Category</h5>

                    <ul className="grid grid-cols-[1fr_1fr]">

                        <li className="inline"><Link to="/browse/all/page/1" className={`inline hover:text-primary-dark ${category === "all" ? 'font-bold' : 'font-regular'}`}>Show All</Link></li>

                        {genrelist.sort().map((item, index) => {
                            return <li key={"genre-" + index} className="inline">
                                <Link to={`/browse/${item.toLowerCase()}/page/1`} className={`inline hover:text-primary-dark ${category.toLowerCase() === item.toLowerCase() ? 'font-bold' : 'font-regular'}`}> {item}</Link>
                            </li>
                        })}

                        {specialcategorylist.sort().map((item, index) => {
                            return <li key={"category-" + index} className="inline">
                                <Link to={`/browse/${item.toLowerCase()}/page/1`} className={`inline hover:text-primary-dark ${category.toLowerCase() === item.toLowerCase() ? 'font-bold' : 'font-regular'}`}> {item}</Link>
                            </li>
                        })}
                    </ul>
                    <h5 className="font-title text-[1.5rem] my-[0.5rem]">Price</h5>
                    <div>
                        <ReactSlider
                            orientation="horizontal"
                            trackClassName='bg-grey h-[8px] my-[4px] rounded-[2px] ml-[0.35rem] mr-[2.5rem]'
                            className='h-[3rem] w-[100%] ml-[1rem]'
                            thumbClassName='thumb'
                            max={150}
                            min={1}
                            minDistance={1}
                            defaultValue={[1, 150]}
                            ariaLabelledby={['minimum-price', 'maximum-price']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            renderThumb={(props, state) => {
                                const { className, key, ...wantedprops } = props
                                return <div {...wantedprops} key={key} className="mx-[-1rem] flex flex-col items-center text-center w-[3rem] text-grey-dark">
                                    <Icon icon="fluent-mdl2:slider-thumb" />
                                    <p className="bg-white rounded-[8px] p-[4px] my-[4px] text-[14px]">{state.valueNow} €</p>
                                </div>
                            }}
                            onAfterChange={(value) => {
                                setPriceFilter(value)
                            }}
                            withTracks={true}
                        /></div>
                    <h5 className="font-title text-[1.5rem] my-[0.5rem]">Binding</h5>
                    <ul>
                        <><li className={`inline hover:text-primary-dark ${bindingFilter === "" ? 'font-bold' : 'font-regular'}`} onClick={() => setBindingFilter("")}>Show All</li></>

                        {bindinglist.sort().map((item, index) => {
                            return <li key={"genre-" + index} className="inline"> | <span className={`inline hover:text-primary-dark ${bindingFilter === item ? 'font-bold' : 'font-regular'}`} onClick={() => setBindingFilter(item)}>{item}</span></li>
                        })}
                    </ul>
                </section>
            </div >
            <div>
                <header className="flex flex-row items-center">
                    <h3 className="font-title text-[40px] mr-auto">{category}</h3>
                    <div className="flex ml-auto">
                        <section>
                            <label htmlFor="sortSelect">Sort by:&nbsp;&nbsp;</label>
                            <select className="border-solid border-grey border bg-grey-light h-[2rem] px-[1rem] py-[0.25rem] rounded-[16px] appearance-none" name="sortSelect" onChange={changeSorting}>
                                <option value="ALPHABET">Alphabetical</option>
                                <option value="DES_rating">Highest Rating</option>
                                <option value="ASC_rating">Lowest Rating</option>
                                <option value="DES_price">Highest Price</option>
                                <option value="ASC_price">Lowest Price</option>
                                <option value="DES_year">Newest Release</option>
                                <option value="ASC_year">Oldest Release</option>
                            </select>
                        </section>
                        <div className="flex flex-row items-center">
                            <Icon icon="lucide:search" width="24px" className="mx-[0.5rem]" />
                            <input onInput={evt => setSearch(evt.target.value)} type="text" placeholder="Search..." className="border-solid border-grey border bg-grey-light h-[2rem] px-[1rem] rounded-[16px]"></input>
                        </div>
                    </div>
                </header>
                <main className="flex flex-col">
                    <div className="flex flex-row flex-wrap gap-[1rem]">
                        {displayedItems}
                    </div>
                    <div className="flex flex-row m-auto">
                        <div className="w-[12rem] flex flex-row justify-end items-center">
                            {pagenumber > 1 ? <Link className="font-semibold hover:text-primary-dark min-w-[2rem]" to={`/browse/${category}/page/${parseInt(pagenumber) - 1}`}>
                                <Icon icon="ep:arrow-left-bold" /></Link> : <></>}

                            {pagenumber > 1 ? <Link className="font-semibold hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/1`}>
                                <>1</>
                            </Link> : <></>}

                            {pagenumber >= 5 ? <div className="min-w-[2rem] text-center">...</div> : <></>}

                            {pagenumber > 3 ? <Link className="hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/${parseInt(pagenumber) - 2}`}>
                                <>{parseInt(pagenumber) - 2}</>
                            </Link> : <></>}

                            {pagenumber > 2 ? <Link className="hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/${parseInt(pagenumber) - 1}`}>
                                <>{parseInt(pagenumber) - 1}</>
                            </Link> : <></>}
                        </div>

                        {maxpages > 1 ? <p className="font-semibold text-secondary text-xl border-b-[3px] border-b-secondary text-center m-[1rem]">{pagenumber}</p> : <></>}

                        <div className="w-[12rem] flex flex-row justify-start items-center">
                            {pagenumber < maxpages - 1 ? <Link className="hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/${parseInt(pagenumber) + 1}`}>
                                <>{parseInt(pagenumber) + 1}</>
                            </Link> : <></>}

                            {pagenumber < maxpages - 2 ? <Link className="hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/${parseInt(pagenumber) + 2}`}>
                                <>{parseInt(pagenumber) + 2}</>
                            </Link> : <></>}

                            {pagenumber < maxpages - 3 ? <div className="min-w-[2rem] text-center">...</div> : <></>}

                            {pagenumber < maxpages ? <Link className="font-semibold hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/${maxpages}`}>
                                <>{maxpages}</>
                            </Link> : <></>}

                            {pagenumber < maxpages ? <Link className="font-semibold hover:text-primary-dark min-w-[2rem]" to={`/browse/${category}/page/${parseInt(pagenumber) + 1}`}>
                                <Icon icon="ep:arrow-right-bold" /></Link> : <></>}
                        </div>
                    </div>

                </main>
            </div>
        </div >
    )
}

export default ProductList