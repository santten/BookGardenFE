import React from 'react'
import { Icon } from '@iconify/react';

function LikeButton(props) {
  const type = props.type

  switch (type) {
    case 'icon_only':
      return (
        <div className="m-[0.5rem]">
          <Icon icon="teenyicons:heart-outline" height="24px" className="text-black hover:text-warning" />
        </div>
      )
    default:
      return (
        <div className="px-[1rem] bg-secondary-light py-[8px] rounded-[99px] text-center mx-auto text-black font-semibold text-[1rem] hover:bg-primary-dark hover:text-white">
          <Icon icon="teenyicons:heart-outline" height="1rem" className="inline" /> Add to Wishlist
        </div>
      )
  }
}

export default LikeButton
