import { useSelector } from "react-redux";
import {
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import ShopContent from "./ShopContent";

export default function Shop() {
  const cartData = useSelector(getCart);
  const productQuantity = useSelector(getTotalCartQuantity);
  const totalCost = useSelector(getTotalCartPrice);
  const roundedCost = totalCost.toFixed(2);
  return (
    <>
      <Link to={"/"}>Back</Link>
      <Link to={"/form"}>Continue</Link>
      <div className="container">
        <ul>
          {cartData.map((el, index) => (
            <ShopContent key={index} singleProduct={el} />
          ))}
        </ul>
      </div>
      <div>
        <h4>{productQuantity}</h4>
        <h4>{roundedCost}</h4>
      </div>
    </>
  );
}
