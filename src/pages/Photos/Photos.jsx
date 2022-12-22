import React, { useContext } from 'react'
import { PhotoProvider } from '../../context/PhotoContext'
import Image from '../../components/Image/Image'

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
            getProducts?.map(product => <Image key={product._id} image={product.image} />)
        }
    </div>
  )
}

export default Photos