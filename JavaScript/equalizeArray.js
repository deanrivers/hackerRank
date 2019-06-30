function equalize(a){
    let arr = a.sort(function(a,b){return a-b});
    var uniqueArray = [];
    var occurences = [];
    var occurenceCount = 0;
    var answer = 0;
    var max = 0;

    for(var i = 0; i<arr.length;i++){
        //push unique numbers
        if(arr[i] != arr[i+1]){
            uniqueArray.push(arr[i]);
        }
    }

    //found out occurences
    for(var j = 0; j<uniqueArray.length;j++){
        occurenceCount = 0;

        for(var k=0;k<arr.length;k++){
            if(uniqueArray[j] == arr[k]){
                occurenceCount++;
            }
        }
        occurences.push(occurenceCount);

    }

    //return max number in unique array as compared to occurences array
    for(var l = 0; l<occurences.length;l++){
        if(occurences[l]>max){
            
            max = occurences[l];
        }
    }

    
    answer = arr.length - max;

    
    console.log('Max number at count: '+max);
    console.log('Unique Array: ' + uniqueArray);
    console.log('Occurences: '+occurences);
    console.log('Answer: '+answer);

    return answer;


}
equalize([3,3,2,1,3,4,4,4,4,4,4]);