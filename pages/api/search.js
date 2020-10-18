import { searchPosts } from '../../lib/api';

export default async function search(req, res) {
  const { q, page } = req.query;

  // Fetch the headless CMS
  const posts = await searchPosts(q, page);

  if (!posts) {
    return res.status(401).json({ message: 'No posts found' });
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(posts));
}
