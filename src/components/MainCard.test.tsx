import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MainCard } from './MainCard';

const defaultProps = {
  children: <div>test</div>,
};

describe('[ components / MainCard ]', () => {
  describe('when component is rendered', () => {
    it('should render snapshoted MainCard', () => {
      const { asFragment } = render(<MainCard {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
