import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = `https://api.themoviedb.org/3/`;
const API_KEY = 'ba282fc7777a85594b4d09bffedbb258';

const DEFAULT_PARAMS = {
  language: 'en-US',
  sort_by: 'popularity.desc',
  include_adult: 'false',
  include_video: 'false',
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const params = new URLSearchParams(req.query as Record<string, string>);
      const defaultParams = new URLSearchParams(DEFAULT_PARAMS);

      let endpoint = `${API_URL}`;
      if (params.get('query')?.length ?? 0 > 0) {
        endpoint += 'search/movie';
      } else {
        endpoint += 'discover/movie';
      }

      const url = `${endpoint}?api_key=${API_KEY}&${defaultParams}&${params}`;
      const response = await fetch(url);
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
