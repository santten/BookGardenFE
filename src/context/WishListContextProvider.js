import { useState, useEffect } from 'react'
import WishListContext from './WishListContext'

// holds the information of current users wishlist
const WishListContextProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);
    const [reloadWishList, setReloadWishList] = useState(false)

    // GET reviews fetch
    useEffect(() => {
        const fetchUsersWishList = async () => {
            const apiurl = process.env.REACT_APP_API_URL
            const userId = JSON.parse(localStorage.getItem("userId"))
            const token = JSON.parse(localStorage.getItem("token"))

            const response = await fetch(`${apiurl}/api/users/favorites/${userId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json()
            setWishList(data)
        }
        fetchUsersWishList()
    }, [reloadWishList])

    return (
        <WishListContext.Provider value={{
            wishList, setWishList,
            reloadWishList, setReloadWishList
        }}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListContextProvider