export function getRandomBentoGrid(num: number) {
  switch (num) {
    case 1:
      return "col-span-1";
    case 2:
      return "col-span-2";
    case 3:
      return "col-span-3";
    case 4:
      return "col-span-4";
    case 5:
      return "col-span-5";
    case 6:
      return "col-span-6";
    case 7:
      return "col-span-7";
    case 8:
      return "col-span-8";
  }
  return "";
}
export default function convertDate(string: string) {
  const date = new Date(string);

  // Define an array of month names
  const months = [
    "tháng 1",
    "tháng 2",
    "tháng 3",
    "tháng 4",
    "tháng 5",
    "tháng 6",
    "tháng 7",
    "tháng 8",
    "tháng 9",
    "tháng 10",
    "tháng 11",
    "tháng 12",
  ];

  // Extract date components
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()]; // getUTCMonth() returns month index (0-11)
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0");

  // Construct the formatted date string
  const time2 = `Ngày ${day} ${month} năm ${year}, lúc ${hours}:${minutes}:${seconds}.${milliseconds}`;
  const time1 = `Ngày ${day} ${month} năm ${year}`;
  return { time1, time2 };
}
export function convertText(text?: string) {
  if(!text) return ''
  return text
    .replace(/ /g, "_")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
