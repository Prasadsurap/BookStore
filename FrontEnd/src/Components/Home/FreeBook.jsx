import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../../../public/Cards.json";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
function FreeBook() {
  let filteredData = Cards.filter((data) => data.category === "Free");
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small laptops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // console.log(filteredData);
 return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <Fade direction="left">
        <h1 className="text-4xl my-4 font-bold">Free Books</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quae quasi natus recusandae blanditiis, ea a adipisci cum impedit esse
          magnam sapiente soluta. Eius, molestias eum iste laboriosam
          consequuntur cumque.
        </p>
      </Fade>

      <div className="slider-container mt-6">
        <Slider {...settings}>
          {filteredData.map((item) => (
            <div key={item.id} className="p-2">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
