import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import WishListContext from '../../context/WishListContext';

const WishListItem = ({ index, item }) => {
    const { reloadWishList, setReloadWishList } = useContext(WishListContext)
    
    // DELETE selected review fetch
    const deleteReview = async (e) => {
        const user_id = JSON.parse(localStorage.getItem("userId"))
        const token = JSON.parse(localStorage.getItem("token"))
        const apibase = process.env.REACT_APP_API_URL

        if (window.confirm(`Are you sure you want to delete "${item.title}" from your wishlist?`)) {

            const response = await fetch(`${apibase}/api/users/favorites/${user_id}/${item._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                setReloadWishList(!reloadWishList)
            }
        }
    }

    return (
        <tr key={`review-${index}`} className="text-grey-dark text-md border-b border-b-grey-dark border-b-[1px]">
            <td className="align-top py-3 pl-4 pr-2 md:min-w-[14rem]">
                <Link className="hover:text-primary-dark" to={`../products/${item._id}`}>
                    <b>{item.title}</b> by {item.author}
                </Link>
            </td>
            <td className="px-2 align-top py-3 min-w-[6rem]">
                {(item.price).toFixed(2) + "€"}
            </td>
            <td className="text-center align-top py-3">
                <button
                    onClick={() => deleteReview()}>
                    <Icon icon="mdi:trashcan-outline" width="1.5rem" className="text-black hover:text-warning"></Icon>
                </button>
            </td>
        </tr>
    )
}

export default WishListItem;
