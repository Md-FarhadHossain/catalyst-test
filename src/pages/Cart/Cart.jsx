import React, { useContext, useState } from "react";
import { PhotoProvider } from "../../context/PhotoContext";

const Cart = () => {
  const [orderStatus, setOrderStatus] = useState("Place Order");
  const { cartItems,setCartItems } = useContext(PhotoProvider);
  console.log(cartItems);
  const itemPrice = 5.99;
  const usdPrice = itemPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(typeof usdPrice);

  const handleOrder = () => {
    setOrderStatus("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setOrderStatus(orderStatus);
      setCartItems([])
    }, 3000);
    setTimeout();
  };
   // Handle trash
   const handleTrash = (imgIndex) => {
    const newItem = cartItems.filter(((item, i) => i !== imgIndex))
    setCartItems(newItem)
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {cartItems.map((item, i) => (
          <div key={item.id}>
            <img onClick={() => handleTrash(i)} src={item.url} />
          </div>
        ))}
      </div>
      {/* Order bottom section */}
      <div className="grid justify-center ">
        <h1 className="text-2xl">
          Total: ${usdPrice.replace("$", "") * cartItems.length}
        </h1>

        {cartItems.length ? (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-5 font-lg"
            onClick={handleOrder}
          >
            {orderStatus}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
