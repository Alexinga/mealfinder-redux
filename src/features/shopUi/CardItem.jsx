import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";

export default function CardItem({ singleProduct }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = singleProduct.title;
  const description = singleProduct.description;
  const imgSrc = singleProduct.images[0];
  const productId = singleProduct.id;
  const price = singleProduct.price;
  const totalPrice = singleProduct.price * 1;
  const quantity = 1;
  const discountPercentage = singleProduct.discountPercentage;

  function handleAddToCart() {
    const newItem = {
      title: title,
      description: description,
      imgSrc: imgSrc,
      id: productId,
      price: price,
      quantity: quantity,
      totalPrice: totalPrice,
      discountPercentage: discountPercentage,
    };
    dispatch(addToCart(newItem));
    navigate("/shop");
  }
  return (
    <li className="col-md-4">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}
