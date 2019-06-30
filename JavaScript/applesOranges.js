function count(s, t, a, b, apples, oranges){
    var range = [s,t];
    var appleTreeLocation = a;
    var orangeTreeLocation = b;

    var sum = 0;
    var numApples = 0;
    var numOranges = 0;

    console.log("Range: " + range)
    

    //apples
    for(var i=0; i<apples.length;i++){
        sum = apples[i] + a;
        if(sum >= s && sum <= t){
            numApples += 1;
        }
    }


    //oranges
    for(var j=0; j<oranges.length;j++){
        sum = oranges[j] + b;
        if(sum >= s && sum <= t){
            numOranges += 1;
            //console.log(sum)
        }
    }

    //return console.log("Number of apples: " + numApples + '\n' + "Number of oranges: " + numOranges)
    return console.log(numApples + '\n' + numOranges)

}
count(7,11,5,15,[-2,2,1],[5,-6])