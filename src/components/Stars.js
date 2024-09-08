import React from 'react'
import Star from '../svg_icons/star_full.svg'
import StarWhite from '../svg_icons/star_white.svg'
import StarLight from '../svg_icons/star_light.svg'

function Stars({ rating, height, background }) {

    const NoStar = background === "white" ? StarLight : StarWhite

    return (
        <div>
            <img alt="star" className="inline" width={height} src={rating.rating >= 1 ? Star : NoStar} />
            <img alt="star" className="inline" width={height} src={rating.rating >= 2 ? Star : NoStar} />
            <img alt="star" className="inline" width={height} src={rating.rating >= 3 ? Star : NoStar} />
            <img alt="star" className="inline" width={height} src={rating.rating >= 4 ? Star : NoStar} />
            <img alt="star" className="inline" width={height} src={rating.rating >= 5 ? Star : NoStar} />
        </div>
    )
}

export default Stars