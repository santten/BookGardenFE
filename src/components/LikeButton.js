import React from 'react'
import Heart from '../svg_icons/heart.svg'

function LikeButton() {
  return (
    <div className="m-[0.5rem]">
      <img className="h-[24px]" src={Heart}></img>
    </div>
  )
}

export default LikeButton
