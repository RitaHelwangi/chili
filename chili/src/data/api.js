const api = 'https://forverkliga.se/JavaScript/api/jsonStore.php';
const key = 'chilis-unique-key';

const menuObject = [
  {
    id: 1,
    name: "Bruschetta",
    description: "Grillat bröd toppat med tomat, vitlök och basilika.",
    ingredients: ["Bröd", "Tomat", "Vitlök", "Basilika", "Olivolja"],
    price: 55,
    image: "https://example.com/images/bruschetta.jpg"
  },
  {
    id: 2,
    name: "Insalata Caprese",
    description: "Sallad med tomater, mozzarella och basilika.",
    ingredients: ["Tomater", "Mozzarella", "Basilika", "Olivolja", "Salt"],
    price: 75,
    image: "https://example.com/images/caprese.jpg"
  }
];

async function saveMenu() {
  try {
    const response = await fetch(`${api}?method=save`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: key,         // this is the key we use to get our data, didn't have to request a key from api
        value: menuObject // this is where we put the menu object
      })
    });
    const result = await response.json(); 
    console.log("Menu was saved", result);
  } catch (error) {
    console.log("Save failed", error);
  }
}

async function loadFromApi() {
  try {
    const url = `${api}?method=load&key=${key}`;
    const response = await fetch(url, {
      method: 'GET'
    });

    const data = await response.json();
    console.log("Raw API response:", data);

    if (!Array.isArray(data)) {  
      console.error("Unexpected API format:", data);
      return null;
    }

    console.log("Loaded from API:", data);
    return data;
  } catch (error) {
    console.error("Failed to load from API", error);
    return null;
  }
}

async function runApi() { // this is just a run function to test the api, not needed in the final version
  await saveMenu();
  await loadFromApi();
}

runApi();

export { saveMenu, loadFromApi, runApi };