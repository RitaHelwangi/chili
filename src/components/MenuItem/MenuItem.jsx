import "../MenuItem/MenuItem.css"
import { useOrderStore } from "../../data/orderStore";

function MenuItemFood(props){

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
		<img src={props.image} alt={props.alt} />
		</div>
		<div>
		<div className="name-price">
		<p >{props.name}</p>
		<p>{props.price} SEK</p>  
		</div>
		<div className="menu-desc"><p>{props.description}</p>
		<p>{props.ingredients}</p>
		<button className="order-btn" onClick={handleAddToCart}>Add to Order</button>
		</div>
		</div>
		</div>
		
	)
}
export default MenuItemFood