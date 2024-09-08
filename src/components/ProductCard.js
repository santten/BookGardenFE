import OrderButton from "./OrderButton"
import LikeButton from "./LikeButton"
import Stars from "./Stars"

function ProductCard(props) {
  const { title, author, rating } = props.item
  console.log(props)
  console.log(rating)

  return (
    <div className="w-[240px] h-[400px] rounded-[28px] bg-grey-light p-[1rem]">
      <div className="mx-auto mb-[1rem] w-[10.5rem] h-[13.25rem] bg-secondary-light">book cover here</div>
      <p className="text-base pb-[0.5rem]">
        <span className="font-semibold">{title}</span>
        <br />by {author}
        <br />price here
        <br /><Stars rating={{rating}} height="24px" background="light"/>
      </p>
      <div className="grid grid-cols-[1fr_1fr] gap-[0.5rem]">
        <OrderButton /><LikeButton />
      </div>
    </div>
  )
}

export default ProductCard