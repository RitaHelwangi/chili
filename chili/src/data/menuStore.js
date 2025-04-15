const pizzaMenu = [
	{
	  id: '1',
	  name: 'Classic Margherita',
	  description: 'En tidlös favorit med tomatbas och mozzarellaost.',
	  ingredients: ['Tomatsås', 'Mozzarella', 'Färsk basilika'],
	  price: 95,
	  image: 'https://www.oliviascuisine.com/wp-content/uploads/2016/08/classic-pizza-margherita-1.jpg',
	  alt: 'Classic Margherita pizza med tomat och basilika'
	},
	{
	  id: '2',
	  name: 'Spicy Pepperoni',
	  description: 'En eldig twist på klassikern med vår hemlagade chiliolja.',
	  ingredients: ['Tomatsås', 'Mozzarella', 'Pepperoni', 'Chiliolja'],
	  price: 110,
	  image: 'https://flouredframe.com/wp-content/uploads/2022/07/sweet-spicy-pizza-2.jpg',
	  alt: 'Spicy Pepperoni pizza med chiliolja'
	},
	{
	  id: '3',
	  name: 'Chili Inferno',
	  description: 'Vår hetaste pizza hittills – inte för de svaghjärtade!',
	  ingredients: ['Tomatsås', 'Mozzarella', 'Kryddig salami', 'Jalapeños', 'Röda chiliflingor'],
	  price: 120,
	  image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'Mycket kryddig pizza med jalapeños och chiliflingor'
	},
	{
	  id: '4',
	  name: 'Green Garden',
	  description: 'En frisk och hälsosam vegetarisk pizza full av grönt.',
	  ingredients: ['Pestobas', 'Mozzarella', 'Zucchini', 'Spenat', 'Oliver'],
	  price: 105,
	  image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'Vegetarisk pizza med gröna grönsaker och pesto'
	},
	{
	  id: '5',
	  name: 'Cheesy Explosion',
	  description: 'En fyr-ostblandning för alla ostälskare.',
	  ingredients: ['Tomatsås', 'Mozzarella', 'Parmesan', 'Blåmögelost', 'Cheddar'],
	  price: 115,
	  image: 'https://plus.unsplash.com/premium_photo-1690056321981-dfe9e75e0247?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'Pizza med en blandning av fyra ostar'
	},
	{
	  id: '6',
	  name: 'BBQ Chicken',
	  description: 'Söt och rökig BBQ-sås med grillade kycklingbitar.',
	  ingredients: ['BBQ-sås', 'Mozzarella', 'Kyckling', 'Rödlök', 'Koriander'],
	  price: 119,
	  image: 'https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'BBQ-kycklingpizza med lök och koriander'
	},
	{
	  id: '7',
	  name: 'Truffle Delight',
	  description: 'Lyx möter smak med krämig tryffelsås och svamp.',
	  ingredients: ['Tryffelkräm', 'Mozzarella', 'Svamp', 'Parmesan', 'Ruccola'],
	  price: 130,
	  image: 'https://images.unsplash.com/photo-1640867870584-53ceb4132dc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'Pizza med tryffelkräm och svamp'
	},
	{
	  id: '8',
	  name: 'Tuna Surprise',
	  description: 'En skaldjurstwist med tonfisk och rödlök.',
	  ingredients: ['Tomatsås', 'Mozzarella', 'Tonfisk', 'Rödlök', 'Kapris'],
	  price: 112,
	  image: 'https://plus.unsplash.com/premium_photo-1730829452112-9255b16c2df8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'Pizza med tonfisk, lök och kapris'
	},
	{
	  id: '9',
	  name: 'Meat Lover’s Dream',
	  description: 'Fylld med kött för den ultimata köttälskaren.',
	  ingredients: ['Tomatsås', 'Mozzarella', 'Korv', 'Bacon', 'Skinka', 'Salami'],
	  price: 125,
	  image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'Pizza fylld med olika sorters kött'
	},
	{
	  id: '10',
	  name: 'Veggie Volcano',
	  description: 'En kryddig vegetarisk pizza full av smak.',
	  ingredients: ['Tomatsås', 'Mozzarella', 'Paprika', 'Chiliflingor', 'Lök', 'Majs'],
	  price: 108,
	  image: 'https://images.unsplash.com/photo-1646257106221-18a7dbc7774d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	  alt: 'Kryddig vegetarisk pizza med färgglada toppings'
	}
  ];
  
  const drinksMenu = [
	{
	  id: '1',
	  name: 'Coca-Cola',
	  price: 25,
	  image: 'https://images.unsplash.com/photo-1735643434124-f51889fa1f8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	
	},
	{
	  id: '2',
	  name: 'Fanta Orange',
	  price: 25,
	  image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	
	},
	{
	  id: '3',
	  name: 'Sprite',
	  price: 25,
	  image: 'https://unsplash.com/photos/clear-glass-cup-filled-with-water-and-lemon-gtDYwUIr9Vg',
	  
	},
	{
	  id: '4',
	  name: 'San Pellegrino Lemon',
	  price: 30,
	  image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	
	},
	{
	  id: '5',
	  name: 'San Pellegrino Orange',
	  price: 30,
	  image: 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	 
	},
	{
	  id: '6',
	  name: 'Iced Tea Peach',
	  price: 28,
	  image: 'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	
	},
	{
	  id: '7',
	  name: 'Sparkling Water',
	  price: 20,
	  image: 'https://plus.unsplash.com/premium_photo-1675949335489-f778abf84197?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	
	},
	{
	  id: '8',
	  name: 'Still Water',
	  price: 15,
	  image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	 
	}
  ];
  