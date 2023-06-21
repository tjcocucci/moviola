import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MovieDeck from './MovieDeck';
import MovieProps from '@/types/MovieProps';

const defaultProps = {
  movies: [
    {
      id: 1,
      title: 'test',
      poster_path: 'test',
    },
    {
      id: 2,
      title: 'test2',
      poster_path: 'test2',
    },
  ],
};

const emptyProps = {
  movies: [],
};

describe('[ components / MovieDeck ]', () => {
  describe('when component is rendered', () => {
    it('should render snapshoted MovieDeck', () => {
      const { asFragment } = render(<MovieDeck {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('when component is rendered with no movies', () => {
    it('should render snapshoted empty MovieDeck', () => {
      const { asFragment } = render(<MovieDeck {...emptyProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
