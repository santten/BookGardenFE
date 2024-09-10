import React from 'react'
import Stars from '../Stars'
import LikeButton from '../LikeButton'

function BookInfoCard(props) {
    const { title, author, genre, rating, year, publisher, ISBN, binding, pages, language } = props.bookinfo
    const price = "9.95 €"

    return (
        <div className="grid grid-cols-[305px_1fr] min-w-[80vw] bg-white">
            <div className="min-w-[305px]">
                <div className="h-[420px] bg-accent">cover image. figure out when you can</div>
                <div className="flex items-center py-[0.5rem] px-[1rem] w-[305px]">
                    <Stars rating={{ rating }} className="flex-start" height="42px" background="white" />
                    <span className="flex-end text-grey-dark text-[1.5rem] text-[#A9A9A9]">({rating.toFixed(2)})</span>
                </div>
                <LikeButton />
            </div>
            <div className="w-[40vw] mx-[20px]">
                <div className="grid grid-cols-[90%_10%]">
                    <p className="min-w-max text-[24px]">
                        <span className="font-semibold text-[36px]">{title}</span><br />
                        {author}</p>
                    <p className="text-[52px] font-semibold">{price}</p>
                </div>
                <div>details</div>
            </div>
        </div>
    )
}

export default BookInfoCard
