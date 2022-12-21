import React, { createContext } from 'react'

export const PhotoProvider = createContext()
const PhotoContext = ({children}) => {

  return (
    <PhotoProvider.Provider value={'hello'}>
        {children}
    </PhotoProvider.Provider>
  )
}

export default PhotoContext