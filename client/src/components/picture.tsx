import React from "react";

import './picture.css'

const Picture: React.FC = (props) => {

  return (
    <div className="Picturecontainer">
        <img
          alt=""
          src="https://tatapi.tourismthailand.org/tatfs/Image/CustomPOI/Picture/P03005279_1.jpeg"
          className="Pictureleft"
        />
        <svg viewBox="0 0 1024 1024" className="leftarrow">
          <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
        </svg>
        <img
          alt=""
          src="https://www.tripniceday.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ftripniceday%2Fuploads%2Fplaces%2F1586852447819.jpg&amp;w=1080&amp;q=75"
          className="Picturemiddle"
        />
        <svg viewBox="0 0 1024 1024" className="rightarrow">
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
        <img
          alt=""
          src="https://news.gimyong.com/attachment/image/50996"
          className="Pictureright"
        />
      </div>
  )
}

export default Picture;
