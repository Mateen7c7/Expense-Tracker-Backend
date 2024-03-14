// function to get the current date
export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};

// function to get the current time
export const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
};

// function to check the given date is present

export const isPresent = (a: Date, b: Date): Boolean => {
  if (a.getFullYear() === b.getFullYear()) {
    if (a.getMonth() === b.getMonth()) {
      if (a.getDate() === b.getDate()) {
        return true;
      }
    }
  }
  return false;
};

export const isMonthPresent = (a: Date, b: Date): Boolean => {
  if (a.getFullYear() === b.getFullYear()) {
    if (a.getMonth() === b.getMonth()) {
      return true;
    }
  }
  return false;
};

//  function to validate date

export const validateDate = (date: Date): Boolean => {
  if (date instanceof Date && !isNaN(date.getTime())) {
    return true;
  }
  return false;
};
