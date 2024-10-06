import AddToCartButton from "./AddToCartButton"
import LikeButton from "./LikeButton"
import Stars from "./Stars"
import { Link as CardLink } from 'react-router-dom';
import noCover from "../images/noCover.svg"
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

function ProductCard(props) {
  const apiurl = process.env.REACT_APP_API_URL

  const { title, author, rating, _id, price, image } = props.item
  const productpath = "/products/" + _id

  const cover = image !== undefined ? (apiurl + image) : noCover

  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className="flex flex-col items-center gap-[0.25rem] md:min-w-[14rem] md:min-h-[25rem] rounded-[1rem] bg-grey-light py-[1rem] border-[inset] hover:shadow-md" title={title + " by " + author}>
      <CardLink to={productpath}>
        <img src={cover} alt={`cover of the book ${title}`} className="mx-auto my-[0.5rem] md:w-[10.5rem] md:h-[13.25rem] w-[8rem] h-[10rem]" />
        <div className="text-center pb-[0.5rem]">
          <span className="font-semibold md:inline hidden">{
            title.length > 18 ? title.slice(0, 18) + "..." : title
          }</span>

          <span className="font-semibold inline md:hidden">{
            title.length > 12 ? title.slice(0, 12) + "..." : title
          }</span>
          <br />
          <span className="md:inline hidden">{
            author.length > 18 ? author.slice(0, 18) + "..." : author
          }</span>

          <span className="inline md:hidden">{
            author.length > 12 ? author.slice(0, 12) + "..." : author
          }</span>

          <br />{price.toFixed(2) + " €"}
          {rating === 0.0 ? <p className="text-grey-dark">(No ratings)</p> : <div className="flex w-[100%] flex-row gap-[0.5rem] flex-center"><Stars rating={rating} className="flex-start" height="24px" background="light" /><span className="hidden md:inline ml-auto text-grey-dark">({rating.toFixed(2)})</span></div>}
        </div>
      </CardLink>
      <div className="flex flex-row mx-auto px-[1rem] gap-[1rem]">
        <AddToCartButton book_id={_id} />
        {isAuthenticated && <LikeButton item_id={_id} type="icon_only" />}
      </div>
    </div>
  )
}

export default ProductCard