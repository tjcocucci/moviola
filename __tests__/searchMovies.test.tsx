import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import 'react-datepicker/dist/react-datepicker.css';
import { buildQueryString } from '../src/utils/searchMovies';

const defaultSearchParams = {
  startDate: new Date('2020-01-01'),
  endDate: new Date('2020-01-02'),
  query: 'test',
  sortBy: 'test',
};

describe('[ utils / searchMovies ]', () => {
  describe('when test params passed', () => {
    it('should return correct query string', () => {
      const queryString = buildQueryString(defaultSearchParams);
      expect(queryString).toBe(
        'api/movies?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-01-02&query=test&sort_by=test'
      );
    });
  });
  describe('when empty params passed', () => {
    it('should return just the endpoint', () => {
      const queryString = buildQueryString({} as typeof defaultSearchParams);
      expect(queryString).toBe('api/movies?');
    });
  });
});
