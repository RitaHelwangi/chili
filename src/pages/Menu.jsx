import "../pages/Menu.css";
import food from "../data/menu"; // fallback-data
import { useEffect, useState } from "react";
import MenuItemFood from "../components/MenuItem/MenuItem";
import MenuItemDrink from "../components/MenuItem/MenuItemDrink";
import { NavLink } from "react-router-dom";
import "../components/Header.css";
import { useOrderStore } from "../data/orderStore";
import { loadFromApi } from "../data/api";
function Menu() {
  const cart = useOrderStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Separate state for food and drink items
  const [foodItems, setFoodItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("food");
  
  useEffect(() => {
    loadFromApi()
      .then((data) => {
        console.log("Fetched menu data:", data);
        
        // Merge API data with fallback data
        const mergedData = food.map((fallbackItem) => {
          const apiItem = data.find((item) => item.name === fallbackItem.name);
          return apiItem || fallbackItem; // Use API item if it exists, otherwise fallback
        });
        
        console.log("Merged menu data:", mergedData);
        
        // Separate the data by category immediately
        const foodData = mergedData.filter(item => item.category === "food");
        const drinkData = mergedData.filter(item => item.category === "drink");
        
        setFoodItems(foodData);
        setDrinkItems(drinkData);
      })
      .catch((err) => {
        console.error("Error loading menu:", err);
        
        // Fallback to local data if API fails
        const foodData = food.filter(item => item.category === "food");
        const drinkData = food.filter(item => item.category === "drink");
        
        setFoodItems(foodData);
        setDrinkItems(drinkData);
      });
  }, []);

  // Determine which category items to show based on selection
  const itemsToRender = selectedCategory === "food" ? foodItems : drinkItems;
  
  return (
    <div className="menu-div">
      <div className="button-menu">
        <div className="menu-nav">
          <button onClick={() => setSelectedCategory("food")}>Food</button>
          <button onClick={() => setSelectedCategory("drink")}>Drink</button>
        </div>
        <div className="icon-shop">  
          <NavLink to="/order">
            <i className="fas fa-shopping-cart">
              {cart.length > 0 && (<span className="basket"> {totalItems}</span>)}
            </i>
          </NavLink>
        </div>
      </div>
      <div className="menu-item-div">
        {selectedCategory === "food"
          ? itemsToRender.map((item) => (
              <MenuItemFood
                id={item.id}
                key={item.id}
                image={item.image}
                alt={item.alt}
                name={item.name}
                price={item.price}
                description={item.description}
                ingredients={item.ingredients.join(", ")}
              />
            ))
          : itemsToRender.map((item) => (
              <MenuItemDrink
                id={item.id}
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