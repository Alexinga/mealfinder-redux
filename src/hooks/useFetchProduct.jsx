import { useDispatch } from "react-redux";
import { getDummyData } from "../api/dummyData";
import { useEffect, useState } from "react";

export default function useFetchProduct() {
  const dispatch = useDispatch();
  const [productDatas, setProductData] = useState();

  useEffect(() => {
    async function fetchProducts() {
      dispatch({ type: "shopUi/loading" });
      try {
        const data = await getDummyData();
        return dispatch({
          type: "shopUi/productState",
          payload: setProductData(data),
        });
      } catch (err) {
        dispatch({ type: "shopUi/errorState", payload: err });
      }
    }

    fetchProducts();
  }, [dispatch]);
  return productDatas;
}
