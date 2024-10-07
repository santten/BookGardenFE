// components/WishList.js
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import WishListItem from './WishListItem';
import WishListContext from '../../context/WishListContext';

const WishList = () => {
    const { wishList, reloadWishList, setReloadWishList } = useContext(WishListContext)

    return (<div className="container mx-auto mb-[2rem] p-2 mt-10">
        <h2 className="text-3xl font-title text-left">Wishlist</h2>
        {wishList.length >= 1 ?
            <table className="my-[1rem] max-w-[95%]">
                <thead className="text-grey-dark text-semibold text-md border-b border-b-grey-dark border-b-[2px]">
                    <tr>
                        <th className="py-2 pl-4 pr-2 w-[90%] text-left">Book</th>
                        <th className="py-2 px-2 text-left">Price</th>
                        <th className="py-2 pl-2 pr-4 text-left">Delete</th>
                    </tr>
                </thead>
                {wishList.map((item, index) =>
                    <WishListItem reloadWishList={reloadWishList} setReloadWishList={setReloadWishList} item={item} index={index} />
                )}</table> :
            <p>Your wishlist is empty!<br />
                <Link className="text-primary-dark underline hover:text-grey-dark" to="/browse/all/page/1">Browse books to find your next wish</Link></p>}
    </div>)
};

export default WishList;