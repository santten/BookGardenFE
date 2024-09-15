import React from 'react'
import Stars from '../Stars'
import LikeButton from '../LikeButton'
import OrderButton from '../OrderButton'

function BookInfoCard(props) {
    const { title, author, genre, rating, year, publisher, ISBN, binding, pages, language, price } = props.bookinfo

    return (
        <div className="grid grid-cols-[30%_70%] w-[70vw] bg-white m-auto">
            <div className="flex w-[100%] h-[100%] flex-col items-center">
                <div className="m-auto h-[100%] w-[80] bg-accent">cover image. figure out when you can</div>
                <div className="flex items-center py-[0.5rem]">
                {(rating === null) ? <p className="text-grey-dark">(No ratings)</p> : <div className="flex w-[100%] flex-row"><Stars rating={{ rating }} className="flex-start" height="32px" background="white" /><span className="text-grey-dark text-[24px] text-[#A9A9A9] ml-[0.5rem] ml-auto">({rating.toFixed(2)})</span></div>}
                    </div>
                <LikeButton />
            </div>
            <div className="flex flex-col items-center mx-[1rem] gap-[1rem] h-[100%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="mr-auto w-[100%]">
                        <span className="text-[xx-large] font-semibold">{title}<br /></span>
                        <span className="text-[large]">{author} | {genre}</span>
                    </div>
                    <div className="ml-auto text-[xxx-large] text-right font-semibold min-w-max">{price} €</div>
                </div>
                <p className="text-left w-[100%]">[Description] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in volupt...</p>
                <OrderButton />
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
