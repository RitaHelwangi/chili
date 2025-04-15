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
        key: key,
        value: JSON.stringify(menuObject)
      })
    });
    const result = await response.json(); 
    console.log("Menu was saved", result);
  } catch (error) {
    console.log("Save failed", error);
  }
}

async function loadMenu() {
  try {
    const response = await fetch(`${api}?method=load&key=${key}`); 
    const data = await response.json();
    const menu = JSON.parse(data.value);
    console.log("Loaded menu from API:", menu);
  } catch (error) {
    console.error("Failed to load menu from API", error);
  }
}

async function run() {
  await saveMenu();
  await loadMenu();
}

run();
