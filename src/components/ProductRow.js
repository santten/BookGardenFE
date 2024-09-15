import React from 'react'
import bookArray from '../temporary_mock_data'
import ProductCard from './ProductCard'

// props
// items: array of numbers (bookIDs)
// title: string (product row title) - defaults to "More Books" if not provided 

function ProductRow(props) {
    const titleContent = props.title || "";

    // check that items is an array + check that it isnt empty
    if (props.items.constructor !== Array || props.items.length === 0) {
        return <></>
    } else {
        return <div>
            <h2 className="font-title text-[xx-large] my-[1rem]">{titleContent}</h2>
            <div className="flex flex-row gap-[40px] pb-[1rem] h-[100%] overflow-x-auto overflow-y-hidden">
                {props.items.map((item) => {
                    let bookobject = bookArray.find((element) => element.id == item)
                    return <ProductCard key={"card-" + item} item={bookobject} />
                })}
            </div>
        </div>
    }
}

export default ProductRow

/*

    let itemsarray = items.items
    console.log(items, items.items, itemsarray, itemsarray.constructor)
    const okay = "k"
    
    if (!Array.isArray(okay)) { return <></> } else {

        return (
            <div className="w-[70vw] m-auto pb-[2rem]">
                <h2 className="font-title text-[xx-large] my-[1rem]">{title}</h2>
                <div className="flex flex-row gap-[40px] max-w-[70vw] pb-[1rem] h-[100%] overflow-x-auto overflow-y-hidden">
                    {itemsarray.map((item) => {
                        let bookobject = bookArray.find((element) => element.id == item)
                        return <ProductCard key={"card-" + item} item={bookobject} />
                    })}
                </div>
            </div>
        )
    }
*/