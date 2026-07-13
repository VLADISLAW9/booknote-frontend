interface GetReadingPercentageParams {
  currentPage: number;
  totalPages: number;
}

export const getReadingPercentage = ({ currentPage, totalPages }: GetReadingPercentageParams) => {
  if (totalPages <= 0) return 0;

  if (currentPage <= 0) return 0;

  if (currentPage >= totalPages) return 100;

  const percentage = (currentPage / totalPages) * 100;

  return Math.round(percentage * 100) / 100;
};
