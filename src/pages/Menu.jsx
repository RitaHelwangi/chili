import "../pages/Menu.css"
import {pizzaMenu} from "../data/menuStore"
import MenuItem from "../components/MenuItem/MenuItem";
function Menu(){
	return(
		<div className="menu-div">
			<div className="menu-nav">
				<button>Food</button>
				<button>Drink</button>

			</div>
			<div className="menu-item-div">
				{pizzaMenu.map(item => (
  <MenuItem
    key={item.id}
    image={item.image}
    alt={item.alt}
    name={item.name}
    price={item.price}
    description={item.description}
    ingredients={item.ingredients.join(', ')}
  />
))}
			</div>
			

		
		</div>
	)
}
export default Menu;