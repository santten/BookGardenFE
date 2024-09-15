import React from 'react'

import { Icon } from '@iconify/react';

function Stars({ rating, height, background }) {
    const noStarColor = background === "white" ? "inline text-grey-light" : "inline text-white"
    const numArray = [0.4, 1.6, 2.6, 3.6, 4.6]
    return (
        <div>
            {numArray.map((item, index) => {
                return <Icon key={"star" + index} icon="material-symbols:star" width={height} className={rating.rating >= item ? "inline text-accent" : noStarColor}></Icon>
            })}
        </div>
    )
}

export default Stars