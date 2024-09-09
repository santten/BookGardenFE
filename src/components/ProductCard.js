import OrderButton from "./OrderButton"
import LikeButton from "./LikeButton"
import Stars from "./Stars"
import { Link as CardLink } from 'react-router-dom';

function ProductCard(props) {
  const { title, author, rating, id } = props.item
  const productpath = "/products/" + id
  const price = "9.95 €" // this must be changed when the book model includes price

  return (
    <CardLink className="w-[240px] h-[404px] rounded-[28px] bg-grey-light p-[1rem]" to={productpath}>
      <div className="mx-auto mb-[1rem] w-[10.5rem] h-[13.25rem] bg-secondary-light">book cover here</div>
      <p className="text-base pb-[0.5rem]">
        <span className="font-semibold">{title}</span>
        <br />by {author}
        <br />{price}
        <p className="flex w-[100%] gap-[2.5rem]">
          <Stars rating={{ rating }} className="flex-start" height="24px" background="light" />
          <span className="flex-end text-grey-dark">({rating.toFixed(2)})</span></p>
      </p>
      <div className="grid grid-cols-[1fr_1fr] gap-[0.5rem] mb-[1rem]">
        <OrderButton /><LikeButton />
      </div>
    </CardLink>
  )
}

export default ProductCard