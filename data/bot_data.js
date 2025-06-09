export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.clooverlandstudios.com/data/bot_data.json');
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*'); // Or use your domain for better security
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
