import { useLoaderData } from "react-router-dom";
import { getDummyData } from "../api/dummyData";

export default function Test() {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <ul>
      {productData.map((item, index) => (
        <li key={index}>
          <div>
            <h2>{item.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getDummyData();
  return data;
}
