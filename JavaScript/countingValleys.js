function countingValleys(n, s) {
  var array = s.split("");
  var sum = 0;
  var valley = 0;
  var belowSeaLevel = null;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == "U") {
      sum += 1;
    } else {
      sum -= 1;
    }

    //are we below sea level?
    if (sum < 0) {
      belowSeaLevel = true;
    }

    if(sum >= 0){
        belowSeaLevel == false;
    }

    if (belowSeaLevel && sum == 0 && array[i] != "D") {
      valley += 1;
      console.log("Triggered: " + i);
      console.log(sum);
    }
  }

  //console.log(sum);
  console.log("Number of Valleys: " + valley);
  return valley;
}

countingValleys(8, "DDUUDDUDUUUD");
