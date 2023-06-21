import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MenuAlt2Icon, XIcon } from './Icons';

describe('[ components / Icons ]', () => {
  describe('when component is rendered', () => {
    it('should render snapshoted Menu Icon', () => {
      const { asFragment } = render(<MenuAlt2Icon />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('when component is rendered', () => {
    it('should render snapshoted X icon', () => {
      const { asFragment } = render(<XIcon />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
