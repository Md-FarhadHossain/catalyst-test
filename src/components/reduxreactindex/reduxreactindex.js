import React, { useContext } from 'react'
import { PhotoProvider } from '../../context/PhotoContext'

const Reduxreactindex = () => {
    const getContext = useContext(PhotoProvider)
    console.log(getContext)
  return (
    <div>reduxreactindex</div>
  )
}

export default Reduxreactindex