import dayjs from "dayjs";
export const convertData = (data) => {
  return dayjs(data).format("DD/MM/YYYY");
};
