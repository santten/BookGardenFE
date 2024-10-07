import React from 'react'
import Stars from '../Stars'
import LikeButton from '../LikeButton'
import AddToCartButton from '../AddToCartButton'
import { useState, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import noCover from "../../images/noCover.svg"

function BookInfoCard(props) {
    const apiurl = process.env.REACT_APP_API_URL;
    const { _id, image, title, author, genre, rating, year, publisher, ISBN, binding, pages, language, price, description } = props.bookinfo;
    const [isExpanded, setIsExpanded] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);
    const cover = image !== undefined ? (apiurl + image) : noCover;

    const renderDescription = () => {
        const maxLength = 480
        if (description.length <= maxLength) {
            return description;
        }
        if (isExpanded) {
            return (
                <>{description} <span className="text-primary-dark hover:text-primary cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>Read less</span></>
            );
        }
        return (
            <>{description.substring(0, maxLength)}... <span className="text-primary-dark hover:text-primary cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>Read more</span></>
        );
    };

    return (
        <div className="flex flex-col md:flex-row gap-[1rem] bg-white containerSmall justify-center my-6">
            <div className="flex flex-col gap-[0.5rem] items-center align-center">
                <img src={cover} className="max-w-[260px]" alt="Book cover"></img>
                <div>
                    {(rating < 1) ? <p className="text-grey-dark">(No ratings)</p> : <div className="flex w-[100%]">
                        <Stars rating={rating} className="flex-start" height="32px" background="white" />
                        <span className="text-grey-dark text-[24px] text-[#A9A9A9] ml-[0.5rem]">({rating.toFixed(2)})</span></div>}
                </div>
                {isAuthenticated && <LikeButton item_id={_id} type="normal" />}
            </div>
            <div className="flex flex-col items-center gap-[1rem] min-w-[40vw] max-w-[100%] md:max-w-[70vw] h-[100%]">
                <div className="flex flex-col md:flex-row items-center justify-between w-[100%]">
                    <div className="mr-auto w-[100%]">
                        <span className="text-[xx-large] font-semibold">{title}<br /></span>
                        <span className="text-[large]">{author} | {genre}</span>
                    </div>
                    <div className="text-[xxx-large] text-center mx-auto md:text-right md:ml-auto font-semibold min-w-max">{price.toFixed(2).toString() + " €"} </div>
                </div>
                <p className="text-left w-[100%] min-h-[100px]">
                    {renderDescription()}
                </p>
                <AddToCartButton book_id={_id} />
                <div className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr] w-[100%] gap-[0.5rem]">
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
