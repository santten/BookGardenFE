import React from 'react'

import { Icon } from '@iconify/react';

// rating: takes a number value and displays stars based on the value
// height: takes a string value (with css unit, e.g. "20px" or "1rem") and sets the height of the star-row
// background: if set to white, make empty stars grey, if set to something else or omitted the empty stars are white
// color: set color of stars

function Stars({ rating, height, background, color }) {

    const noStarColor = background === "white" ? "inline text-grey-light" : "inline text-white"
    const numArray = [0.4, 1.6, 2.6, 3.6, 4.6]
    const starColor = color || "accent"

    return (
        <div className="flex flex-row">
            {numArray.map((item, index) => {
                return <Icon key={"star" + index} icon="material-symbols:star" width={height}
                    className={`inline text-${rating >= item ? starColor : noStarColor}`}></Icon>
            })}
        </div>
    )
}

export default Stars