import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import 'react-datepicker/dist/react-datepicker.css';
import Home from '../src/app/page';

describe('[ app / Home ]', () => {
  describe('when component is rendered', () => {
    it('should render a the snapshoted home component', () => {
      const { asFragment } = render(<Home />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
