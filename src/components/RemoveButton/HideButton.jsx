import React from "react";
import { useMenuStore } from "./HideData";

const HideButton = ({ itemId}) => {
	const hideItem = useMenuStore((state) => state.hideItem);
	const hiddenItems = useMenuStore((state) => state.hiddenItems);
	const showItem = useMenuStore((state) => state.showItem);

	const isHidden = hiddenItems.includes(itemId);

	return (
		<button onClick={() => isHidden ? showItem(itemId) : hideItem(itemId)}>
      			{isHidden ? "Lägg till i meny" : "Ta bort från meny"}
    	</button>
	);
};


export default HideButton;