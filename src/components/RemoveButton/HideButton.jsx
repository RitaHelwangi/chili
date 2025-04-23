import React from "react";
import { useMenuStore } from "./HideData";

const HideButton = ({ itemId}) => {
	const hideItem = useMenuStore((state) => state.hideItem);

	return (
		<button onClick={() => hideItem(itemId)}>Ta bort från menyn</button>
	);
};


export default HideButton;