import React from "react";

const Header = () => {
  return (
    <header className="bg-green-300 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">CHILI PIZZA</div>
      <nav className="space-x-6">
        <a href="#" className="hover:underline">Food</a>
        <a href="#" className="hover:underline">Wines</a>
        <a href="#" className="hover:underline">Book table</a>
        <a href="#" className="hover:underline">For workers</a>
      </nav>
    </header>
  );
};

export default Header;