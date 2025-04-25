import "../pages/Menu.css";
import { food } from "../data/menuStore";
import { useState } from "react";
import MenuItemFood from "../components/MenuItem/MenuItem";
import MenuItemDrink from "../components/MenuItem/MenuItemDrink";
import { NavLink } from "react-router-dom";
import "../components/Header.css"
import { useOrderStore } from "../data/orderStore";
function Menu() {
	const cart = useOrderStore((state) => state.cart);
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
	
  const [selectedCategory, setSelectedCategory] = useState("food");

  const menuToShow = food.filter((item) => item.category === selectedCategory);

  return (
    <div className="menu-div">
		<div className="button-menu">
      <div className="menu-nav">
        <button onClick={() => setSelectedCategory("food")}>Food</button>
        <button onClick={() => setSelectedCategory("drink")}>Drink</button>
      </div>

      <div className="icon-shop">  
       <NavLink to="/order"> <i className="fas fa-shopping-cart">{cart.length>0 &&(<span className="basket"> {totalItems}</span>)}</i></NavLink>
	
      </div></div>

      <div className="menu-item-div">
        {selectedCategory === "food"
          ? menuToShow.map((item) => (
              <MenuItemFood
                key={item.id}
				id={item.id}
                image={item.image}
                alt={item.alt}
                name={item.name}
                price={item.price}
                description={item.description}
                ingredients={item.ingredients.join(", ")}
              />
            ))
          : menuToShow.map((item) => (
              <MenuItemDrink
                key={item.id}
				id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
      </div>
    </div>
  );
}

export default Menu;
