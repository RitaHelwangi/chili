import "../MenuItem/MenuItem.css"
function MenuItem(props){
	return(
		
		<div className="menu-item">
			<div>
		    <img src={props.image} alt={props.alt} />
			 </div>
			 <div>
				 <div className="name-price">
			    <p>{props.name}</p>
			     <p>{props.price}</p>  
			</div>
			<div className="menu-desc"><p>{props.description}</p>
			       <p>{props.ingredients}</p>

			</div>
			 
			
				
			
		   
			 </div>
	 	   
		</div>
		
	)
}
export default MenuItem