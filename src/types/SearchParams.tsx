export default interface SearchParams {
  query?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  sortBy?: string;
}
