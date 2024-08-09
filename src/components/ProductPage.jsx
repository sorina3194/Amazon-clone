import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { callAPI } from "../utils/CallApi";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    console.log(product);
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazoneclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            {/*Left*/}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="" />
            </div>
            {/*Middle*/}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            {/*Right*/}
            <div className="col-span-2 p-4 rounded bg-white ">
              <div className="text-xl xl:test-2xl font-semibold text-right text-red-700">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:test-lg font-semibold text-right text-gray-500">
                RRP:{" "}
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:test-base font-semibold text-blue-500 mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:test-base font-semibold text-blue-500 mt-1">
                FREE Delivery
              </div>
              <div className="text-base xl:test-lg font-semibold text-green-700 mt-1">
                In Stock
              </div>
              <div className="text-base xl:test-lg">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-2 bg-white border rounded-md focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="btn"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
