import React from 'react'
import bookArray from '../../temporary_mock_data'
import ProductCard from '../ProductCard'

function Recommendations(props) {
    const { id, author, genre, publisher } = props.bookinfo

    let recommendationArray = []

    // check authors first
    bookArray.forEach(item => { if ((item.author === author) && (item.id !== id)) { recommendationArray.push(item.id) } })
    let titlecontent = `More From ${author}`

    // check genre next    
    if (recommendationArray.length < 1) {
        bookArray.forEach(item => { if ((item.genre === genre) && (item.id !== id)) { recommendationArray.push(item.id) } })
        titlecontent = "More Like This"
    }

    // check publisher next
    if (recommendationArray.length < 1) {
        bookArray.forEach(item => { if ((item.publisher === publisher) && (item.id !== id)) { recommendationArray.push(item.id) } })
    }

    if (recommendationArray.length === 0) {
        return <></>
    } else {
        const slicedArr = recommendationArray.slice(0, 9)
        return (
            <div className="w-[70vw] m-auto pb-[2rem]">
                <h2 className="font-title text-[xx-large] my-[1rem]">{titlecontent}</h2>
                <div className="flex flex-row gap-[40px] max-w-[70vw] pb-[1rem] h-[100%] overflow-x-auto overflow-y-hidden">
                    {slicedArr.map((item) => {
                        let bookobject = bookArray.find((element) => element.id == item)
                        return <ProductCard key={"card-" + item} item={bookobject} />
                    })}
                </div>
            </div>
        )
    }
}

export default Recommendations
