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
    // console.log("Raw API response:", text);
    const data = JSON.parse(text);
    // console.log("Parsed API data:", data);
    return typeof data === "string" ? JSON.parse(data) : data;
  } catch (err) {
    console.error("Load failed", err);
    return [];
  }
}