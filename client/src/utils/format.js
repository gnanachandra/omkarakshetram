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


export function convertTo12HourFormat(time24) {
  // Split the time string into hours and minutes
  const [hours, minutes] = time24.split(':').map(Number);

  // Determine if it's AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Pad the minutes with leading zero if needed
  const paddedMinutes = String(minutes).padStart(2, '0');

  return `${hours12}:${paddedMinutes} ${period}`;
}
