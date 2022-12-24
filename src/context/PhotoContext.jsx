import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/features/productSlice'

export const PhotoProvider = createContext()
const PhotoContext = ({children}) => {

    const [cartItems, setCartItems] = useState([]) 

    const {products, loading} = useSelector((state) => state.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    

    }, [])

    // Toogle Favorite method
    const  toggleFavorite = (id) => {
      setCartItems([...cartItems, id])

      console.log(`toggleFavorite is working ${id}`)
    }

    console.log(cartItems)

    
    // Context provider value
    const propsValue = {products,loading,toggleFavorite}

  return (
    <PhotoProvider.Provider value={propsValue}>
        {children}
    </PhotoProvider.Provider>
  )
}

export default PhotoContext