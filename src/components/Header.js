import React from "react";

function Header() {
  return (
    <div>
      <div className="bg-red-500 h-14 flex items-center justify-between px-8  ">
        <h1>E-Commerce </h1>
        <nav>
          <ul className="flex space-x-12 text-white capitalize">
            <li>Home</li>
            <li>Feed</li>
            <li>About</li>
            <li>Contact </li>
          </ul>
        </nav>
      </div>
      <div className="bg-yellow-500 h-9 flex items-center justify-center ">
      <ul className=" flex space-x-12 text-white capitalize">
            <li>Latest Products </li>
            <li>Offers</li>
            <li>Warrant Products</li>
            <li>Free Delivery</li>
          </ul>
      </div>
      
    </div>
  );
}

export default Header;
