import "../MenuItem/MenuItem.css";
import "../../pages/Menu.css"
import { useOrderStore } from "../../data/orderStore";
import { useMenuStore } from "../RemoveButton/HideData"; 

function MenuItemDrink(props) {
	const addToCart = useOrderStore((state) => state.addToCart);
	const hiddenItems = useMenuStore((state) => state.hiddenItems); 
	const isHidden = hiddenItems.includes(props.id); 

	if (isHidden) return null; 
	
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
		<img src={props.image} />
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
