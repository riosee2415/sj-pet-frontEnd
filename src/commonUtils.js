export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const emptyCheck = (value) => {
  if (!value || value.trim() === "") {
    return false;
  } else {
    return true;
  }
};

export const searchYearAndMonth = () => {
  const currentYear = new Date().getFullYear() + "";
  let currentMonth = new Date().getMonth() + 1;
  currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth + "";

  const comboYear = [
    currentYear + "",
    currentYear - 1 + "",
    currentYear - 2 + "",
  ];

  const comboMonth = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  return { currentYear, comboYear, comboMonth, currentMonth };
};
