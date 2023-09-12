export const formatDate = (data) => {
  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const formatTime = (time) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    const period = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    return `${hours}:${minutes} ${period}`;
  }