const api = 'https://forverkliga.se/JavaScript/api/jsonStore.php';
const key = 'chilis-unique-key';

export const fetchReceiptData = async () => {
  const res = await fetch(`${api}?method=read&key=${key}`);
  const data = await res.json();
  return data;
};
