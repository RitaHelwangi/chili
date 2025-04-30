// src/data/api.js

const api = "https://forverkliga.se/JavaScript/api/jsonStore.php";
const key = "chilis-unique-key";

export async function saveMenu(menuObject) {
  try {
    await fetch(`${api}?method=save`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key,
        value: JSON.stringify(menuObject),
      }),
    });
  } catch (err) {
    console.error("Save failed", err);
  }
}

export async function loadFromApi() {
	try {
	  const res = await fetch(`${api}?method=load&key=${key}`);
	  const text = await res.text();
	  console.log("Raw API response:", text);
	  const parsed = JSON.parse(text);
  
	  if (Array.isArray(parsed)) {
		// Om vi får en array av objekt, plocka ut och parsa varje value
		const menuItems = parsed.map(item => JSON.parse(item.value));
		console.log("Parsed menu items from array:", menuItems);
		return menuItems;
	  } else if (parsed.value) {
		// Om vi får ett enstaka objekt
		const singleItem = JSON.parse(parsed.value);
		console.log("Parsed single item:", singleItem);
		return Array.isArray(singleItem) ? singleItem : [singleItem];
	  } else {
		return [];
	  }
	} catch (err) {
	  console.error("Load failed", err);
	  return [];
	}
  }
  