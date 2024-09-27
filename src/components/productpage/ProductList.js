import ProductCard from '../ProductCard';

import { React, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ReactSlider from 'react-slider';

function ProductList(props) {
    const apiurl = process.env.REACT_APP_API_URL
    const [bookArray, setBookArray] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    const category = props.category

    let completeapiurl = apiurl

    switch (category) {
        case "all":
            completeapiurl = apiurl + `/api/books/`
            break;
        case "search":
            const query = props.query
            completeapiurl = apiurl + `/api/books/search/${query}`
            break;
        case "new":
            completeapiurl = apiurl + `/api/books/new`
            break;
        case "topsellers":
            completeapiurl = apiurl + `/api/books/topsellers`
            break;
        default:
            completeapiurl = apiurl + `/api/books/genre/${category}`
            break;
    }

    const pagenumber = props.pagenumber ?? 1

    useEffect(() => {
        fetch(completeapiurl, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setBookArray(data);
            })
            .catch((error) => console.log(error));
    });

    const [sorting, setSorting] = useState('')
    const [contentPerPage, setContentPerPage] = useState(20)
    const [priceFilter, setPriceFilter] = useState([1, 999])
    const [bindingFilter, setBindingFilter] = useState('')
    const [showMoreCategories, setShowMoreCategories] = useState(false);
    // example genrelist. maybe it will be more dynamic in the future

    const genrelist = [{ title: "Show All", linkitem: "all" },
    { title: "New Arrivals", linkitem: "new" },
    { title: "Top Sellers", linkitem: "topsellers" },
    { title: "Dystopian", linkitem: "dystopian" },
    { title: "Satire", linkitem: "satire" },
    { title: "Political", linkitem: "political" },
    { title: "Romance", linkitem: "romance" },
    ]

    const changeSorting = (evt) => {
        setSorting(evt.target.value)
    }

    const changeContentPerPage = (evt) => {
        setContentPerPage(evt.target.value)
    }

    const changePageNumber = (newPageNumber) => {
        const pathParts = location.pathname.split('/');
        pathParts[pathParts.length - 1] = newPageNumber; // seeing as the page number is the last part of the path
        const newPath = pathParts.join('/');
        navigate(newPath);
    };

    const handleFiltering = (item) => {
        const priceCheck = ((priceFilter[0] < item.price) && (priceFilter[1] > item.price))
        const bindingCheck = (bindingFilter === '' ? item : item.binding === bindingFilter)

        return (bindingCheck && priceCheck)
    }

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

    const slicedItems = filteredItems.slice(firstContentIndex, lastContentIndex)

    const handleNoItems = () => {
        if (location.pathname.endsWith('/1')) {
            return <>No items found!</>;
        } else {
            changePageNumber(1);
        }
    }

    const displayedItems = slicedItems.length >= 1 ? slicedItems.map((item) => {
        return <ProductCard key={"card-" + item._id} item={item} />
    }) : handleNoItems()

    let maxpages = Math.ceil(filteredItems.length / contentPerPage)

    return (
        <div className="containerBig flex flex-col md:grid md:grid-cols-[20%_auto] gap-[1.5rem] mb-[100px] mt-6">
            <div>
                <section className="bg-grey-light rounded-[32px] min-h-[10rem] p-[1rem]">
                    <h5 className="font-title text-[1.5rem] mb-[0.5rem]">Category</h5>

                    <ul className="flex flex-col">

                        {genrelist.sort().map((item, index) => {
                            return <li key={"genre-" + index}>
                                <Link to={`/browse/genre/${item.linkitem.toLowerCase()}/page/1`} className={`inline hover:text-primary-dark 
                                ${category.toLowerCase() === item.linkitem.toLowerCase() ? 'font-bold' : 'font-regular'} 
                                ${(!showMoreCategories && (index > 4) && !(category.toLowerCase() === item.linkitem.toLowerCase()) && "hidden")}`}> {item.title}</Link>
                            </li>
                        })}
                        {/* <button className="hover:text-grey-dark text-secondary text-left" onClick={() => setShowMoreCategories(!showMoreCategories)}>
                            {showMoreCategories ? '(See Less Categories)' : '(See All Categories)'}
                        </button> */}
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
                    {/* bindinglist.length > 1 && <><h5 className="font-title text-[1.5rem] my-[0.5rem]">Binding</h5>
                        <ul>
                            <><li className={`inline hover:text-primary-dark ${bindingFilter === "" ? 'font-bold' : 'font-regular'}`} onClick={() => setBindingFilter("")}>Show All</li></>
                            {bindinglist.sort().map((item, index) => {
                                return <li key={"genre-" + index} className="inline"> | <span className={`inline hover:text-primary-dark ${bindingFilter === item ? 'font-bold' : 'font-regular'}`} onClick={() => setBindingFilter(item)}>{item}</span></li>
                            })}
                        </ul></>*/}
                </section>
            </div >
            <div>
                <header className="flex flex-col md:flex-row md:items-center">
                    <h3 className="font-title text-[40px] mr-auto">{category}</h3>
                    <div className="flex flex-col my-[0.5rem] gap-[0.5rem] md:flex-row md:ml-auto">
                        <section className="ml-auto flex flex-row items-center">
                            <label htmlFor="sortSelect" className="px-[0.5rem]">Sort by:</label>
                            <select className="border-solid border-grey border bg-grey-light h-[2rem] px-[1rem] cursor-pointer py-[0.25rem] rounded-[16px] appearance-none" name="sortSelect" onChange={changeSorting}>
                                <option value="ALPHABET">Alphabetical</option>
                                <option value="DES_rating">Highest Rating</option>
                                <option value="ASC_rating">Lowest Rating</option>
                                <option value="DES_price">Highest Price</option>
                                <option value="ASC_price">Lowest Price</option>
                                <option value="DES_year">Newest Release</option>
                                <option value="ASC_year">Oldest Release</option>
                            </select>
                        </section>
                        <section className="ml-auto flex flex-row items-center">
                            <label htmlFor="contentPerPageSelect" className="px-[0.5rem]">Books Per Page:</label>
                            <select className="text-left border-solid border-grey border bg-grey-light h-[2rem] px-[1rem] cursor-pointer py-[0.25rem] rounded-[16px] appearance-none" name="contentPerPageSelect" onChange={changeContentPerPage}>
                                <option value="20">20</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </section>
                    </div>
                </header>
                <main className="flex flex-col mx-auto">
                    <div className="flex flex-col mx-auto md:mx-0 md:flex-row md:flex-wrap gap-[1rem]">
                        {displayedItems}
                    </div>

                    <div className="flex flex-row m-auto">
                        <div className="flex flex-row justify-end items-center">
                            {pagenumber > 1 ? <Link className="font-semibold hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/${parseInt(pagenumber) - 1}`}>
                                <Icon className="m-auto" icon="ep:arrow-left-bold" /></Link> : <></>}

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

                        <div className="flex flex-row justify-start items-center">
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

                            {pagenumber < maxpages ? <Link className="font-semibold hover:text-primary-dark min-w-[2rem] text-center" to={`/browse/${category}/page/${parseInt(pagenumber) + 1}`}>
                                <Icon className="m-auto" icon="ep:arrow-right-bold" /></Link> : <></>}
                        </div>
                    </div>

                </main>
            </div>
        </div >
    )
}

export default ProductList