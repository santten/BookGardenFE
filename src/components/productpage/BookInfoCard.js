import React from 'react'
import Stars from '../Stars'
import LikeButton from '../LikeButton'
import AddToCartButton from '../AddToCartButton'

function BookInfoCard(props) {
    const apiurl = "http://localhost:4000"
    console.log(props, "props")
    const { _id, image, title, author, genre, rating, year, publisher, ISBN, binding, pages, language, price, description } = props.bookinfo
    
    return (
        <div className="flex flex-row gap-[1rem] bg-white containerSmall justify-center my-6">
            <div className="flex flex-col gap-[0.5rem] items-center">
                <img src={apiurl + image} className="w-[200px]"></img>
                {(rating === undefined) ? <p className="text-grey-dark">(No ratings)</p> : <div className="flex w-[100%] flex-row"><Stars rating={rating} className="flex-start" height="32px" background="white" /><span className="text-grey-dark text-[24px] text-[#A9A9A9] ml-[0.5rem] ml-auto">({rating.toFixed(2)})</span></div>}
                <LikeButton />
            </div>
            <div className="flex flex-col items-center gap-[1rem] min-w-[40vw] h-[100%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="mr-auto w-[100%]">
                        <span className="text-[xx-large] font-semibold">{title}<br /></span>
                        <span className="text-[large]">{author} | {genre}</span>
                    </div>
                    <div className="ml-auto text-[xxx-large] text-right font-semibold min-w-max">{price.toFixed(2).toString() + " €"} </div>
                </div>
                <p className="text-left w-[100%]">{description}</p>
                <AddToCartButton book_id={_id} />
                <div className="grid grid-cols-[1fr_1fr_1fr] w-[100%] gap-[0.5rem]">
                    <div className="bg-[#EFEFEF] min-h-[80px] p-[0.5rem]">
                        <span className="font-semibold">Publisher<br /></span>
                        <span>{publisher || "Not Listed"}</span>
                    </div>
                    <div className="bg-[#EFEFEF] min-h-[80px] p-[0.5rem]">
                        <span className="font-semibold">Publishing Year<br /></span>
                        <span>{year || "Not Listed"}</span>
                    </div>
                    <div className="bg-[#EFEFEF] min-h-[80px] p-[0.5rem]">
                        <span className="font-semibold">ISBN<br /></span>
                        <span>{ISBN || "Not Listed"}</span>
                    </div>
                    <div className="bg-[#EFEFEF] min-h-[80px] p-[0.5rem]">
                        <span className="font-semibold">Binding<br /></span>
                        <span>{binding || "Not Listed"}</span>
                    </div>
                    <div className="bg-[#EFEFEF] min-h-[80px] p-[0.5rem]">
                        <span className="font-semibold">Pages<br /></span>
                        <span>{pages || "Not Listed"}</span>
                    </div>
                    <div className="bg-[#EFEFEF] min-h-[80px] p-[0.5rem]">
                        <span className="font-semibold">Language<br /></span>
                        <span>{language || "Not Listed"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfoCard
