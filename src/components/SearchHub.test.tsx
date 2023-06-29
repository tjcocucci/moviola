import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import SearchHub from './SearchHub';

const defaultProps = {
  children: <div>Test</div>,
  handleSearch: () => {},
};

describe('[ components / SearchHub ]', () => {
  describe('when component is rendered', () => {
    it('should render snapshoted SearchHub', () => {
      const { asFragment } = render(<SearchHub {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('when search components are not changed', () => {
    it('should not call handleChange', () => {
      const props = {
        handleChange: vi.fn(),
      };
      expect(props.handleChange).not.toHaveBeenCalled();
    });
  });

  describe('when text is imputed in searchbar', () => {
    it('should call handleChange', () => {
      vi.useFakeTimers();
      const props = {
        children: <div>Test</div>,
        handleSearch: vi.fn(),
      };
      const { container } = render(<SearchHub {...props} />);
      const inputElement = container.querySelectorAll('input')[0];

      if (inputElement !== null) {
        fireEvent.change(inputElement, {
          target: { value: 'godfather' },
        });
      } else {
        throw new Error('Input element not found');
      }
      vi.advanceTimersByTime(501);

      expect(props.handleSearch).toHaveBeenCalled();
    });
  });

  describe('when start date is changed', () => {
    it('should call handleChange', () => {
      const props = {
        children: <div>Test</div>,
        handleSearch: vi.fn(),
      };
      const { container } = render(<SearchHub {...props} />);
      const inputElement = container.querySelectorAll('input')[1];

      if (inputElement !== null) {
        fireEvent.change(inputElement, {
          target: { value: '2020-01-01' },
        });
      } else {
        throw new Error('Input element not found');
      }
      expect(props.handleSearch).toHaveBeenCalled();
    });
  });

  describe('when end date is changed', () => {
    it('should call handleChange', () => {
      const props = {
        children: <div>Test</div>,
        handleSearch: vi.fn(),
      };
      const { container } = render(<SearchHub {...props} />);
      const inputElement = container.querySelectorAll('input')[2];

      if (inputElement !== null) {
        fireEvent.change(inputElement, {
          target: { value: '2020-01-01' },
        });
      } else {
        throw new Error('Input element not found');
      }
      expect(props.handleSearch).toHaveBeenCalled();
    });
  });

  describe('when option is changed', () => {
    it('should call handleChange', () => {
      const props = {
        children: <div>Test</div>,
        handleSearch: vi.fn(),
      };
      const { container } = render(<SearchHub {...props} />);
      const selectElement = container.querySelectorAll('select')[0];

      if (selectElement !== null) {
        fireEvent.change(selectElement, {
          target: { value: 'popularity.desc' },
        });
      } else {
        throw new Error('select element not found');
      }
      expect(props.handleSearch).toHaveBeenCalled();
    });
  });
});
