import "../MenuItem/MenuItem.css";
import "../../pages/Menu.css"

function MenuItemDrink(props) {
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
		
		
		
		

		<button className="order-button order-button-drink">Add to Order</button>
		
		
		</div>
		
		</div>
		
	)
}

export default MenuItemDrink;
