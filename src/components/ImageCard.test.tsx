import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ImageCard from './ImageCard';

const defaultProps = {
  movieObject: {
    id: 1,
    title: 'test',
    poster_path: 'test',
  },
};

describe('[ components / ImageCard ]', () => {
  describe('when component is rendered', () => {
    it('should render snapshoted ImageCard', () => {
      const { asFragment } = render(<ImageCard {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
