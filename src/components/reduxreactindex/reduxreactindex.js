import React, { useContext } from 'react'
import { PhotoProvider } from '../../context/PhotoContext'

const Reduxreactindex = () => {
    const {products} = useContext(PhotoProvider)
    console.log(products)
  return (
    <div>reduxreactindex</div>
  )
}

export default Reduxreactindex