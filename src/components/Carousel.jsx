import React from "react";

import "../styles/carousel.css";
import baby01 from "../images/products/baby01.jpeg";
import baby02 from "../images/products/baby02.jpg";
import baby03 from "../images/products/baby03.jpg";
import baby04 from "../images/products/baby04.jpg";

function Carousel() {
  return (
    <div className='single-item' style={{ backgroundColor: "#F1F1F1", margin: "0px" }}>
      <div>
        <img
          style={{ maxHeight: "380px", width: "100%" }}
          className='carImg'
          src={baby01}
          alt='Card image'
        />
      </div>
      <div>
        <img
          className='carImg'
          src={baby02}
          alt='Card image'
          style={{ maxHeight: "380px", width: "100%" }}
        />
      </div>
      <div>
        <img
          className='carImg'
          src={baby03}
          alt='Card image'
          style={{ maxHeight: "380px", width: "100%" }}
        />
      </div>
      <div>
        <img
          className='carImg'
          src={baby04}
          alt='Card image'
          style={{ maxHeight: "380px", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Carousel;
