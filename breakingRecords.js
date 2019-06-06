function breakingRecords(arr) {
  var asnwer = [];

  var brokenLeastCount = 0;
  var brokenMostCount = 0;

  //first game is the base;
  var base = arr[0];

  var max = 0;
  var min = arr[0];

  //iterate
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > base) {
      base = arr[i];
      max = arr[i];
      brokenMostCount += 1;
      console.log("High Score triggered at: " + i);
    }

    if (arr[i] < min) {
      min = arr[i];
      brokenLeastCount += 1;
      console.log("Low 1 Score triggered at: " + i);
      console.log(min);
    }
  }

  asnwer.push(brokenMostCount);
  asnwer.push(brokenLeastCount);

  console.log(asnwer);

  return asnwer;
}

breakingRecords([12, 24, 10, 24]);
