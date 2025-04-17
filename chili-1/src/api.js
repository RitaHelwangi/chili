const api = 'https://forverkliga.se/JavaScript/api/jsonStore.php';
const key = 'chilis-unique-key';

export async function fetchReceiptData() {
  try {
    const response = await fetch(`${api}?action=load&key=${key}`);
    if (!response.ok) throw new Error('API Error');
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}
