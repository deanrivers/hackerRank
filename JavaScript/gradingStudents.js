function grade(arr) {
  var grades = arr;

  var roundedAnswers = [];
  var n5 = 0;

  //loop
  for (var i = 0; i < arr.length; i++) {
    n5 = grades[i];
    console.log(n5);

    if (grades[i] < 38) {
      roundedAnswers.push(grades[i]);
    }

    if (grades[i] >= 38) {
      while (n5 % 5 != 0) {
        n5 += 1;
      }

      if (n5 - grades[i] < 3) {
        roundedAnswers.push(n5);
      } else {
        roundedAnswers.push(grades[i]);
      }
    }
  }

  return roundedAnswers;
}

grade([82, 67, 38, 33]);
