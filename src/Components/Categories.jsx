import React, { useState, useEffect } from "react";
import client from "../client";
import Category from "./Category";
const Categories = () => {
  const [Categories, setCategories] = useState(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "category"]{
                title,
                slug,
                description,
                image{
                    asset-> {
                        _id,
                        url
                    },
                },
                hexCode,
            }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);
  return (
    <div className="">
      <h3 className="text-3xl font-bold text-center my-10 lg:my-5">
        All Categories
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full gap-10 my-10">
        {Categories &&
          Categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
      </div>
    </div>
  );
};
export default Categories;
