import React, { useState, useEffect } from "react";

import "./picture.css";

const images = [
  "https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005279_1.jpeg",
  "https://storage.googleapis.com/tripniceday/uploads/places/1586852447819.jpg",
  "https://news.gimyong.com/attachment/image/50996",
  "https://www.museumthailand.com/upload/evidence/1503925252_35403.jpg",
  "http://www.songkhla.go.th/tmp/cc312e79bd4e9eaa9032a23661e778ab.jpg",
];

const Picture: React.FC = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const handleClick = (direction: string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalImages - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [totalImages]);

  return (
    <div className="Picturecontainer">
      <img
        alt=""
        src={images[(currentIndex - 1 + totalImages) % totalImages]}
        className="Pictureleft"
      />
      <svg
        viewBox="0 0 1024 1024"
        className="leftarrow"
        onClick={() => handleClick("left")}
      >
        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
      </svg>
      <img alt="" src={images[currentIndex]} className="Picturemiddle" />
      <svg
        viewBox="0 0 1024 1024"
        className="rightarrow"
        onClick={() => handleClick("right")}
      >
        <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
      </svg>
      <img
        alt=""
        src={images[(currentIndex + 1) % totalImages]}
        className="Pictureright"
      />
    </div>
  );
};

export default Picture;