import AddToCartButton from "./AddToCartButton"
import LikeButton from "./LikeButton"
import Stars from "./Stars"
import { Link as CardLink } from 'react-router-dom';

function ProductCard(props) {
  const apiurl = process.env.REACT_APP_API_URL

  const { title, author, rating, _id, price, image } = props.item
  const productpath = "/products/" + _id

  return (
    <CardLink className="w-[14rem] h-[25rem] rounded-[28px] bg-grey-light p-[1rem] border-[inset] hover:shadow-md" to={productpath} title={title + " by " + author}>
      <img src={apiurl + image} className="mx-auto mb-[1rem] w-[10.5rem] h-[13.25rem]" />
      <div className="text-center pb-[0.5rem]">
        <span className="font-semibold">{
          title.length > 18 ? title.slice(0, 18) + "..." : title
        }</span>
        <br />{author.length > 18 ? author.slice(0, 18) + "..." : author}
        <br />{price.toFixed(2) + " €"}
        {rating === 0.0 ? <p className="text-grey-dark">(No ratings)</p> : <div className="flex w-[100%] flex-row flex-center"><Stars rating={rating} className="flex-start" height="24px" background="light" /><span className="ml-auto text-grey-dark">({rating.toFixed(2)})</span></div>}
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[0.5rem] mb-[1rem]">
        <AddToCartButton book_id={_id} /><LikeButton type="icon_only" />
      </div>
    </CardLink>
  )
}

export default ProductCard