import "../pages/Menu.css";
import { pizzaMenu, drinksMenu } from "../data/menuStore";
import { useState } from "react";
import MenuItemFood from "../components/MenuItem/MenuItem";
import MenuItemDrink from "../components/MenuItem/MenuItemDrink";
import { NavLink } from "react-router-dom";

function Menu() {
	
  const [selectedCategory, setSelectedCategory] = useState("food");

  const menuToShow = selectedCategory === "food" ? pizzaMenu : drinksMenu;

  return (
    <div className="menu-div">
      <div className="menu-nav">
        <button onClick={() => setSelectedCategory("food")}>Food</button>
        <button onClick={() => setSelectedCategory("drink")}>Drink</button>
      </div>

      <div className="icon-shop">
       <NavLink to="/order"> <i className="fas fa-shopping-cart"></i></NavLink>
      </div>

      <div className="menu-item-div">
        {selectedCategory === "food"
          ? menuToShow.map((item) => (
              <MenuItemFood
                key={item.id}
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
