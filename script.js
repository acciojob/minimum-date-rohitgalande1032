function minDate(dates){
  //write you code here
  if (dates.length === 0) {
    return null; 
  }

  // Initialize the earliest date to the first date (parsed)
  let earliest = new Date(dates[0]);

  for (let i = 1; i < dates.length; i++) {
    const currentDate = new Date(dates[i]); // Convert string to Date

    // Compare based on actual date value
    if (currentDate < earliest) {
      earliest = currentDate;
    }
  }

  // Convert the earliest date back to the format YYYY/MM/DD
  const year = earliest.getFullYear();
  const month = String(earliest.getMonth() + 1).padStart(2, '0'); // Add 1 to month as it's zero-based
  const day = String(earliest.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

alert(minDate(dates));
