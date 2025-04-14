import React from 'react';
import useDishStore from '../Store/menuInfoStore';

const DishDisplay = () => {
  const { dish } = useDishStore();

  return (
    <div className="">
      <div className="">
        <img 
          src={dish.imageUrl}
          alt={dish.title}
          className=""
        />
      </div>
      
      <div className="">
        <div className="">
          <h2 className="">{dish.title}</h2>
          <span className="">{dish.price}</span>
        </div>
        
        <p className="">{dish.description}</p>
        
        <button className="">
          Lägg till i beställning
        </button>
      </div>
    </div>
  );
};

export default DishDisplay;