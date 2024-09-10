import OrderButton from "./OrderButton"
import LikeButton from "./LikeButton"
import Stars from "./Stars"
import { Link as CardLink } from 'react-router-dom';

function ProductCard(props) {
  const { title, author, rating, id, price } = props.item
  const productpath = "/products/" + id

  return (
    <CardLink className="w-[240px] h-[404px] rounded-[28px] bg-grey-light p-[1rem]" to={productpath} title={title}>
      <div className="mx-auto mb-[1rem] w-[10.5rem] h-[13.25rem] bg-secondary-light">book cover here</div>
      <div className="text-base pb-[0.5rem]">
        <span className="font-semibold">{
          title.length > 20 ? title.slice(0, 20) + "..." : title 
        }</span>
        <br />by {author}
        <br />{price + " €"}
        <div className="flex w-[100%] gap-[2.5rem]">
          <Stars rating={{ rating }} className="flex-start" height="24px" background="light" />
          <span className="flex-end text-grey-dark">({rating.toFixed(2)})</span></div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[0.5rem] mb-[1rem]">
        <OrderButton /><LikeButton type="icon_only" />
      </div>
    </CardLink>
  )
}

export default ProductCard