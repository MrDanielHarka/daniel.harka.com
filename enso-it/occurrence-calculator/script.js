text.addEventListener('input', () => {
  const occurrences = {},
    data = JSON.parse(text.value);
  let output = '';

  data.forEach((month) => {
    occurrences[month.start.dateTime.slice(5, 7)] = 0;
  });

  data.forEach((day) => {
    occurrences[day.start.dateTime.slice(5, 7)] +=
      (new Date(day.end.dateTime.slice(0, 16)).valueOf() -
        new Date(day.start.dateTime.slice(0, 16)).valueOf()) /
      1000 /
      60 /
      60;
  });

  Object.keys(occurrences)
    .sort()
    .forEach((property) => {
      output += `${property}. hó: ${Math.ceil(occurrences[property])} óra <br>`;
    });

  solution.innerHTML = output;
  console.log(occurrences);
});
