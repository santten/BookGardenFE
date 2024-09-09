import React from 'react'

import { Icon } from '@iconify/react';

function Stars({ rating, height, background }) {
    const noStarColor = background === "white" ? "inline text-black" : "inline text-white"
    const numArray = [0.5, 1.5, 2.5, 3.5, 4.5]

    return (
        <div>
            {numArray.map((item) => {
                return <Icon icon="material-symbols:star" width={height} className={rating.rating >= item ? "inline text-accent" : noStarColor}></Icon>
            })}
        </div>
    )
}

export default Stars