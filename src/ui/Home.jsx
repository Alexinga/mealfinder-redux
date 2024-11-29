import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../features/shopUi/shopUiSlice";
import CardItem from "../features/shopUi/CardItem";
export default function Home() {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.shopUi);
  console.log(productData);
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  return (
    <div className="">
      <section>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/banner-1.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/banner-2.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/banner-3.png"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="container">
        <ul className="list-unstyled row">
          {productData?.map((singleProduct, index) => (
            <CardItem key={index} singleProduct={singleProduct} />
          ))}
        </ul>
      </section>
    </div>
  );
}
