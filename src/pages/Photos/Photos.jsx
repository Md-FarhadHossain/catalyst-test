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
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 relative'>
        {
            getProducts?.map(product => <Image className='relative' key={product._id} id={product._id} image={product.image} />)
        }
    </div>
  )
}

export default Photos