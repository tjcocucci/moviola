import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = `https://api.themoviedb.org/3/`;
const API_KEY = 'ba282fc7777a85594b4d09bffedbb258';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const response = await fetch(
        `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc`
      );
      const data = await response.json();
      const results = data.results;

      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'Something went wrong fetching the TMDB API.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

export default handler;
