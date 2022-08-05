const getMinDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 40);
  return date;
};

const getMaxDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 40);
  return date;
};

export const MIN_DATE = getMinDate();
export const MAX_DATE = getMaxDate();
