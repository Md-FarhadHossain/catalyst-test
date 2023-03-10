import React, { useContext } from 'react'
import { PhotoProvider } from '../../context/PhotoContext'
import Image from '../../components/Image/Image'

const Photos = () => {
    const {products,loading} = useContext(PhotoProvider)

    const getProducts = products?.data

    if(loading){
        return <h2>loading...</h2>
    }

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 relative'>
        {
            getProducts?.map(product => {
              const img = {
                url: product.image,
                id: product._id,
                name: product.name
              }
              return (<Image className='relative' key={product._id} img={img} product={product} />)
            })
        }
    </div>
  )
}

export default Photos