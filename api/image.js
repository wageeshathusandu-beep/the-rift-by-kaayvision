export default async function handler(req, res) {
  const fileId = req.query.id;
  if (!fileId) {
    return res.status(400).json({ error: 'Missing file id' });
  }

  try {
    const url = `https://drive.google.com/uc?export=view&id=${fileId}`;
    const response = await fetch(url, { redirect: 'follow' });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch image' });
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = Buffer.from(await response.arrayBuffer());

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400');
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
