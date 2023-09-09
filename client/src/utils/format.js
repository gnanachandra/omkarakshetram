export const formatDate = (data) => {
  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const formatTime = (data) => {
  const date = new Date(data);
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const timeString = date.toLocaleTimeString("en-US", options);
  return timeString;
};
