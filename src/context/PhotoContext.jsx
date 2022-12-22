import React, { createContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/features/productSlice'

export const PhotoProvider = createContext()
const PhotoContext = ({children}) => {

    const {products, loading} = useSelector((state) => state.product)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    
    }, [])

    const  toggleFavorite = (id) => {
      console.log(`toggleFavorite is working ${id}`)
    }
    
    const propsValue = {products,loading,toggleFavorite}

  return (
    <PhotoProvider.Provider value={propsValue}>
        {children}
    </PhotoProvider.Provider>
  )
}

export default PhotoContext