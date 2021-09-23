import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://image.zdnet.co.kr/2021/07/16/d20b625a305774d910b1595b372a5779.jpg"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>null</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your shopping basket</h2>
            {basket.map(
              (item) => (
                console.log({ item }),
                (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                )
              )
            )}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
