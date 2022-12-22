import React, { useState } from 'react'

const Image = ({image}) => {
    const [hovered, setHovered] = useState(false)
    const onMouseEnter = () => {
        setHovered(true)
    }
    const onMouseLeave = () => {
        setHovered(false)
    }
    console.log(hovered)
  return (
    <>
        <img onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} src={image} alt="" />
    </>
  )
}

export default Image