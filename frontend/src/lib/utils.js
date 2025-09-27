export function formatDate(date) {
  console.log("formatDate input:", date, typeof date, date instanceof Date);

  // Handle invalid dates or non-date values
  if (!date) {
    console.log("Date is null/undefined");
    return "No date";
  }

  // If it's not a Date object, try to create one
  if (!(date instanceof Date)) {
    console.log("Converting to Date object from:", date);
    date = new Date(date);
  }

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.log("Invalid date after conversion");
    return "Invalid Date";
  }

  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  console.log("Formatted date:", formatted);
  return formatted;
}
