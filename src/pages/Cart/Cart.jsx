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
    </div>
  )
}

export default Cart