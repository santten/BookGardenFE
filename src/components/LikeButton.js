import { Icon } from '@iconify/react';
import { useState, useEffect, useContext } from 'react';
import WishListContext from '../context/WishListContext';

function LikeButton({ item_id, type }) {
  const { wishList } = useContext(WishListContext)
  const [isOnWishList, setIsOnWishList] = useState(false)

  useEffect(() => {
    if (wishList.length > 1) {
      const filteredList = wishList.filter(item => item._id === item_id)
      if (filteredList.length > 0) { setIsOnWishList(true) }
    }
  }, [item_id, wishList])

  const user_id = JSON.parse(localStorage.getItem("userId"))
  const token = JSON.parse(localStorage.getItem("token"))
  const apibase = process.env.REACT_APP_API_URL

  const addToWishList = async (e) => {
    try {
      const body = {
        userId: user_id,
        bookId: item_id
      }

      const response = await fetch(apibase + "/api/users/favorites", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        throw new Error("network error")
      } else {
        const data = await response.json();
        setIsOnWishList(true)
        return data;
      }
    } catch (error) {
      console.error(error)
    }
  }

  const removeFromWishList = async (e) => {
    try {
      const response = await fetch(`${apibase}/api/users/favorites/${user_id}/${item_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error("network error")
      } else {
        const data = await response.json();
        setIsOnWishList(false)
        return data;
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>{isOnWishList ? <button onClick={removeFromWishList}
      className={
        type === "icon_only" ? "text-warning hover:text-black"
          : "px-[1rem] hover:bg-primary-dark py-[8px] rounded-[99px] text-center mx-auto font-semibold text-[1rem] bg-warning text-white"}>
      <Icon icon="teenyicons:heart-solid" height="1.5rem" className="inline" />
      <span className={type === "icon_only" ? "hidden" : "inline text-[1rem] ml-[0.5rem]"}>On Your Wishlist</span>
    </button> :
      <button onClick={addToWishList}
        className={
          type === "icon_only" ? "text-black hover:text-warning"
            : "px-[1rem] bg-primary-dark py-[8px] rounded-[99px] text-center mx-auto text-white font-semibold text-[1rem] hover:bg-warning"}>
        <Icon icon="teenyicons:heart-outline" height="1.5rem" className="inline" />
        <span className={type === "icon_only" ? "hidden" : "inline text-[1rem] ml-[0.5rem]"}>Add To Your Wishlist</span>
      </button>
    }
    </>
  )
}

export default LikeButton
