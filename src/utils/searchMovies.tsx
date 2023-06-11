import SearchParams from '@/types/SearchParams';

export const buildQueryString = (searchParams: SearchParams) => {
  let queryString = new URLSearchParams();
  if (searchParams.startDate) {
    queryString.set('primary_release_date.gte', searchParams.startDate);
  }
  if (searchParams.endDate) {
    queryString.set('primary_release_date.lte', searchParams.endDate);
  }
  if (searchParams.query) {
    queryString.set('query', searchParams.query);
  }
  if (searchParams.sortBy) {
    queryString.set('sort_by', searchParams.sortBy);
  }
  return `api/movies?${queryString.toString()}`;
};
