import { useRef } from 'react'
import bookArray from '../../temporary_mock_data'
import ProductRow from '../ProductRow'

function Recommendations(props) {
    const { id, author, genre, publisher } = props.bookinfo

    let recommendationArray = []
    const scrollContainerRef = useRef(null);

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
            <div className="max-w-max containerBig">
                <ProductRow ref={scrollContainerRef} items={slicedArr} title={titlecontent} />
            </div>
        )
    }
}

export default Recommendations
