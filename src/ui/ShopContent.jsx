import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  getCurrentQuantityById,
  increaseQuantity,
} from "../features/cart/cartSlice";
export default function ShopContent({ singleProduct }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantityById(singleProduct.id));
  function handleIncreaseItem() {
    dispatch(increaseQuantity(singleProduct.id));
  }
  function handleDecreaseItem() {
    dispatch(decreaseQuantity(singleProduct.id));
  }
  return (
    <>
      <li>
        <div>
          <button onClick={handleIncreaseItem}>Inc</button>
          <h2>{singleProduct.title}</h2>
          <p>{quantity}</p>
          <button onClick={handleDecreaseItem}>Dec</button>
        </div>
      </li>
    </>
  );
}
