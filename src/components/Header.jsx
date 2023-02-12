import React from "react";

const Header = () => {
  return (
    <>
      <div className=" flex flex-col  gap-6 sticky  top-0 pt-4 backdrop-blur  ">
        <h1 className=" capitalize text-5xl  text-white">my notes</h1>
        <div className="flex gap-3 mb-5">
          <button className="border  text-white rounded-full px-3 py-1 ">
            All
          </button>
          <button className="border  text-white rounded-full px-3 py-1 ">
            Important
          </button>
          <button className="border text-white rounded-full px-3 py-1">
            To-do
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
