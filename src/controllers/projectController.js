function timeNow() {
    const monthInitials = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const currentDate = new Date();
    const day = currentDate.toLocaleString("en-us", { weekday: "short" });
    const date = currentDate.getDate();
    const month = monthInitials[currentDate.getMonth()];
  
    return [day, date, month];
}

function generateGreetingMessage() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greetingMessage;

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = "Good morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good afternoon!";
  } else {
    greetingMessage = "Good evening!";
  }

  return greetingMessage;
}

export default timeNow;