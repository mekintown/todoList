function timeNow() {
    const monthInitials = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const currentDate = new Date();
    const day = currentDate.toLocaleString("en-us", { weekday: "long" });
    const date = currentDate.getDate();
    const month = monthInitials[currentDate.getMonth()];
  
    return [day, date, month];
}

export default timeNow;