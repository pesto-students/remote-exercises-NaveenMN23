function timeWas(time, now) {
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  const elapsedInMs = now - time;
  if (elapsedInMs < SECONDS) {
    return "just now";
  } else if (elapsedInMs < MINUTES) {
    const elapsedInSec = Math.round(elapsedInMs / SECONDS);
    return elapsedInSec > 1
      ? elapsedInSec + " seconds ago"
      : elapsedInSec + " second ago";
  } else if (elapsedInMs < HOURS) {
    const elapsedInMin = Math.round(elapsedInMs / MINUTES);
    return elapsedInMin > 1
      ? elapsedInMin + " minutes ago"
      : elapsedInMin + " minute ago";
  } else if (elapsedInMs < DAYS) {
    const elapsedInHour = Math.round(elapsedInMs / HOURS);
    return elapsedInHour > 1
      ? elapsedInHour + " hours ago"
      : elapsedInHour + " hour ago";
  } else if (elapsedInMs < WEEKS) {
    const elapsedInDay = Math.round(elapsedInMs / DAYS);
    return elapsedInDay > 1
      ? elapsedInDay + " days ago"
      : elapsedInDay + " day ago";
  } else if (elapsedInMs < MONTHS) {
    const elapsedInWeek = Math.round(elapsedInMs / WEEKS);
    return elapsedInWeek > 1
      ? elapsedInWeek + " weeks ago"
      : elapsedInWeek + " week ago";
  } else if (elapsedInMs < YEARS) {
    const elapsedInMonth = Math.round(elapsedInMs / MONTHS);
    return elapsedInMonth > 1
      ? elapsedInMonth + " months ago"
      : elapsedInMonth + " month ago";
  } else {
    const elapsedInYear = Math.round(elapsedInMs / YEARS);
    return elapsedInYear > 1
      ? elapsedInYear + " years ago"
      : elapsedInYear + " year ago";
  }
}

export { timeWas };
