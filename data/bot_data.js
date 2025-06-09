export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.clooverlandstudios.com/data/bot_data.json');
    const data = await response.json();

    // Set CORS headers to allow requests from your frontend
    res.setHeader('Access-Control-Allow-Origin', '*'); // You can set this to your bot domain for better security
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.status(200).json(data); // Send the JSON response back
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
