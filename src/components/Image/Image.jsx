import React, { useContext, useState } from "react";
import { RiHeartLine, RiShoppingCart2Line, RiHeartFill } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsCartPlus,BsFillCartFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { PhotoProvider } from "../../context/PhotoContext";

const Image = ({ img, product }) => {
  const [hovered, setHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toggleFavorite } = useContext(PhotoProvider);

  const onMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };
  console.log(hovered);

  const handleHeartClick = (id) => {
    toggleFavorite(id);
    setIsFavorited(!isFavorited);
    
  };
  console.log(isFavorited);


  // Handle cart click
  const handleCart = (img) => {
    toggleFavorite(img)
    console.log(img)
    setIsFavorited(true)
  }

  return (
    <>
      <div onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
        {hovered ? (
          <>
            <span className="absolute bottom-0 text-2xl">
              {isFavorited ? (
                <>
                  <span
                    className="cursor-pointer w-8 h-8 items-center flex justify-center text-pink-500 hover:bg-[#ff4df340] rounded-full"
                    onClick={() => handleHeartClick(img.id)}
                  >
                    <RiHeartFill />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="cursor-pointer w-8 h-8 items-center flex justify-center hover:text-pink-500 hover:bg-[#ff4df340] rounded-full "
                    onClick={() => handleHeartClick(img.id)}
                  >
                    <RiHeartLine />
                  </span>
                </>
              )}

              {
                isFavorited ?<><BsFillCartFill /> </>: <><span onClick={() => handleCart(img)} className="cursor-pointer w-8 h-8 items-center flex justify-center hover:text-green-600 hover:bg-green-200 rounded-full"><BsCartPlus /></span></> 
              }
            </span>
          </>
        ) : (
          ""
        )}
        <img className="imageHover" src={img.url} alt="" />
      </div>
    </>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.object,
};

export default Image;
