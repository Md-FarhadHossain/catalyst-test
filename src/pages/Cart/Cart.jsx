import React, { useContext } from 'react'
import { PhotoProvider } from '../../context/PhotoContext'

const Cart = () => {
  const {cartItems} = useContext(PhotoProvider)
  console.log(cartItems)
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
      <h1 className="text-2xl">Total: {cartItems.length * 5.99}</h1>
    </div>
  )
}

export default Cart