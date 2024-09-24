import { useRef } from 'react'
import bookArray from '../../temporary_mock_data'
import ProductRow from '../ProductRow'

function Recommendations(props) {
    const { _id, author, genre, publisher } = props.bookinfo

    let recommendationArray = []
    const scrollContainerRef = useRef(null);

    // check authors first
    bookArray.forEach(item => { if ((item.author === author) && (item._id !== _id)) { recommendationArray.push(item._id) } })
    let titlecontent = `More From ${author}`

    // check genre next    
    if (recommendationArray.length < 1) {
        bookArray.forEach(item => { if ((item.genre === genre) && (item._id !== _id)) { recommendationArray.push(item._id) } })
        titlecontent = "More Like This"
    }

    // check publisher next
    if (recommendationArray.length < 1) {
        bookArray.forEach(item => { if ((item.publisher === publisher) && (item._id !== _id)) { recommendationArray.push(item._id) } })
    }

    if (recommendationArray.length === 0) {
        return <></>
    } else {
        const slicedArr = recommendationArray.slice(0, 9)
        return (
            <div className="w-full containerBig">
                <ProductRow ref={scrollContainerRef} items={slicedArr} title={titlecontent} />
            </div>
        )
    }
}

export default Recommendations
