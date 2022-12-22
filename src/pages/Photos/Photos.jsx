import React, { useContext } from 'react'
import { PhotoProvider } from '../../context/PhotoContext'

const Photos = () => {
    const {products,loading} = useContext(PhotoProvider)

    console.log(products.data)
    const getProducts = products?.data

    if(loading){
        return <h2>loading...</h2>
    }

  return (
    <div>
        {
            getProducts?.map(product => <div>
                 <img src={product.image} alt={product.name} />
            </div>)
        }
    </div>
  )
}

export default Photos