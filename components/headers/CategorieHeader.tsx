import React from "react";

function CategorieHeader() {
  return (
    <div
      className="w-full h-1  bg-white text-sm text-black px-4   grid grid-cols-1
  flex flex-col
  pt-2.5
  pb-8

  "
    >
      <div className="rounded-md shadow-sm ">
        <img
          className="w-full h-10"
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
    </div>
  );
}

export default CategorieHeader;
