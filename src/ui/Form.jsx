import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getCart,
  //   getDiscountTotalCartPrice,
  getTotalCartPrice,
} from "../features/cart/cartSlice";

export default function Form() {
  const [discount, setDiscount] = useState("");
  const [final, setFinal] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const totalPrice = useSelector(getTotalCartPrice);
  const cartData = useSelector(getCart);
  const discountPrice = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const percentage = 0.1;
  const discountValue = discountPrice * percentage;
  const discountCost = discountPrice - discountValue;
  const roundedCost = discountCost.toFixed(2);
  console.log(discountPrice);
  //   const discountPrice = useSelector(getDiscountTotalCartPrice);
  //   const roundedPrice = totalPrice.toFixed(2);
  //   const finalPrice = discount === "DISCOUNT" ? discountPrice : roundedPrice;
  //   console.log(discountPrice);
  function handleSubmit(e) {
    e.preventDefault();
    if (discount === "DISCOUNT") {
      setFinal(roundedCost);
      setIsDiscountApplied(true);
      setDiscount("");
    } else {
      alert("Incorrect Coupon");
      setIsDiscountApplied(false);
    }
  }
  return (
    <div className="container">
      <form>
        <label>This is a form</label>
        <input
          type="text"
          placeholder="Enter Coupon"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div>
        <h4>{isDiscountApplied ? final : totalPrice}</h4>
      </div>
    </div>
  );
}
