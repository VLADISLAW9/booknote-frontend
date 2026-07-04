interface GetReadingPercentageParams {
  finishedAt: string;
  startedAt: string;
}

export const getReadingPercentage = ({ finishedAt, startedAt }: GetReadingPercentageParams) => {
  const start = new Date(startedAt).getTime();
  const finish = new Date(finishedAt).getTime();

  const now = Date.now();

  if (now < start) return 0;
  if (now > finish) return 100;

  const totalDuration = finish - start;
  const timePassed = now - start;

  const percentage = (timePassed / totalDuration) * 100;
  return Math.round(percentage * 100) / 100;
};
