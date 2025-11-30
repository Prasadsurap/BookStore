import React from "react";
import Cards from '../../../public/Cards.json'
import Card from "./Card";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 justify-center text-center items-center">
        <h1 className="font-semibold text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! : )</span>
        </h1>
        <p className="mt-12 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          dicta quo vitae, unde libero, sapiente rem dolores quisquam pariatur
          accusantium molestiae distinctio fugit repudiandae. Iusto quam magnam
          explicabo veniam necessitatibus.
        </p>
        <Link to={'/'}>
                <button className="bg-pink-500 hover:bg-pink-700 duration-400 ease-in-out cursor-pointer text-white px-4 py-2 rounded-md mt-8 ">Back</button>

        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
        {
            Cards.map((item)=>(
                <Card key={item.id} item={item}/>
            ))
        }
      </div>
    </div>
  );
}

export default Courses;
