import "../MenuItem/MenuItem.css";
import "../../pages/Menu.css"
import { useOrderStore } from "../../data/orderStore";

function MenuItemDrink(props) {
	console.log("MenuItemDrink props:", props);
	const addToCart = useOrderStore((state) => state.addToCart);
	
		const handleAddToCart = () => {
			const item = {
			  id: props.id, 
			  name: props.name,
			  price: props.price,
			  image: props.image,
			  description: props.description,
			  ingredients: props.ingredients,
			};
			addToCart(item);
		  };
	return(
		
		<div className="menu-item">
		<div className="image-menu">
		{props.image ? (
  <img src={props.image} alt={props.name} />
) : null}
		</div>
		<div>
		<div className="name-price">
		<p >{props.name}</p>
		<p>{props.price} SEK</p>  
		</div>
		

		<button className="order-button order-button-drink" onClick={handleAddToCart}>Add to Order</button>
		
		
		</div>
		
		</div>
		
	)
}

export default MenuItemDrink;
