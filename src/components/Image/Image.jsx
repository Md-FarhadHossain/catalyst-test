import React, { useContext, useState } from "react";
import { RiHeartLine, RiShoppingCart2Line,RiHeartFill } from "react-icons/ri";
import { PhotoProvider } from "../../context/PhotoContext";
const Image = ({ image,id }) => {
  const [hovered, setHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false)
  const {toggleFavorite} = useContext(PhotoProvider)

  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };
  console.log(hovered);

  const handleHeartClick = (id) => {
    toggleFavorite(id)
    setIsFavorited(!isFavorited)
  }
  console.log(isFavorited)

  return (
    <>
      <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
        {hovered ? (
          <>
            <span className="absolute bottom-0 text-2xl">
              {isFavorited ? <><span  className="cursor-pointer w-8 h-8 items-center flex justify-center text-pink-500 hover:bg-[#ff4df340] rounded-full " onClick={() => handleHeartClick(id)}><RiHeartFill /></span></> : <><span className="cursor-pointer w-8 h-8 items-center flex justify-center hover:text-pink-500 hover:bg-[#ff4df340] rounded-full " onClick={() => handleHeartClick(id)}><RiHeartLine /></span></>}

              <RiShoppingCart2Line />
            </span>
          </>
        ) : (
          ""
        )}
        <img className="imageHover" src={image} alt="" />
      </div>
    </>
  );
};

export default Image;
