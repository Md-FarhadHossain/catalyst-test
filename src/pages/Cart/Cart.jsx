import React, { useContext, useState } from 'react'
import { PhotoProvider } from '../../context/PhotoContext'

const Cart = () => {
  const [orderStatus, setOrderStatus] = useState("Place Order")
  const {cartItems} = useContext(PhotoProvider)
  console.log(cartItems)
  const itemPrice =5.99
  const usdPrice = itemPrice.toLocaleString("en-US", {style: "currency", currency:"USD"})
  console.log(typeof usdPrice)
 

  const handleOrder = () => {
    setOrderStatus('Ordering...')
    setTimeout(() => {
      console.log("Order placed!")
      setOrderStatus(orderStatus)
    },3000)
  setTimeout()
  }


  return (
    <div>
      {cartItems.length}
      <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
      {
        cartItems.map(item => <div key={item.id}>
          <img  src={item.url} />
        </div>)
      }
      </div>
      <h1 className="text-2xl">Total: {usdPrice.replace('$', '') * cartItems.length}</h1>

      <button onClick={handleOrder}>{orderStatus}</button>
      
    </div>
  )
}

export default Cart