import React from 'react'
import { Icon } from '@iconify/react';

function LikeButton() {
  return (
    <div className="m-[0.5rem]">
      <Icon icon="teenyicons:heart-outline" height="24px" className="text-black hover:text-warning"/>
    </div>
  )
}

export default LikeButton
