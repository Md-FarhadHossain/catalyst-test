import React, { useContext, useState } from "react";
import { PhotoProvider } from "../../context/PhotoContext";
import { FaTrashAlt, FaTrash } from "react-icons/fa";

const Cart = () => {
  const [orderStatus, setOrderStatus] = useState("Place Order");
  const [hovered, setHovered] = useState(false);

  const { cartItems, setCartItems } = useContext(PhotoProvider);
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
      setCartItems([]);
    }, 3000);
    setTimeout();
  };
  // Handle trash
  const handleTrash = (imgIndex) => {
    const newItem = cartItems.filter((item, i) => i !== imgIndex);
    setCartItems(newItem);
  };

  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {cartItems.map((item, i) => (
          <div className="relative" key={item.id}>
            <img src={item.url} />
            <button
              className="text-2xl absolute bottom-3 right-3 cursor-pointer w-8 h-8 items-center flex justify-center text-red-500 hover:bg-red-200 rounded-full ml-3"
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter}
              onClick={() => handleTrash(i)}
            >
              {hovered ? (
                <>
                  <FaTrash />
                </>
              ) : (
                <>
                  <FaTrashAlt />
                </>
              )}
            </button>
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
