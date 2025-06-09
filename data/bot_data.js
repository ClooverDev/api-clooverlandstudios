export default async function handler(req, res) {
  const response = await fetch('https://api.clooverlandstudios.com/data/bot_data.json');
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}