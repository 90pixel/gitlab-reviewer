import dayjs from 'dayjs';

const dateFormat = (date: string) => {
  if (!date) return null;
  return dayjs(date).format('DD.MM.YYYY');
};
export default dateFormat;
