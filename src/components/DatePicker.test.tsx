import { describe, it, expect, vi } from 'vitest';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import DatePicker from './DatePicker';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const defaultProps = {
  handleChange: () => {},
};

describe('[ components / DatePicker ]', () => {
  describe('when component is rendered', () => {
    it('should render a date picker', () => {
      const { asFragment } = render(<DatePicker {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('when date is not changed', () => {
    it('should not call handleChange', () => {
      const props = {
        handleChange: vi.fn(),
      };
      expect(props.handleChange).not.toHaveBeenCalled();
    });
  });
  describe('when date is changed', () => {
    it('should call handleChange', () => {
      const props = {
        handleChange: vi.fn(),
      };
      const { container } = render(<DatePicker {...props} />);
      const inputElement = container.querySelector('input');

      if (inputElement !== null) {
        fireEvent.change(inputElement, {
          target: { value: '2020-01-01' },
        });
      } else {
        throw new Error('Input element not found');
      }

      expect(props.handleChange).toHaveBeenCalled();
    });
  });
});
