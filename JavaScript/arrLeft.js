function arrLeft(arr, d) {
  var answer = new Array(arr.length);
  var count = 1;
  var newLocation = 0;
  console.log(answer)


  
  for (var i = 0; i < 1; i++) {
    
    newLocation = i;

    while(count<=d){

        newLocation--;

        if(newLocation < 0 ){
            newLocation = arr.length;
        }

        count++;

    }

    
    answer[newLocation] = arr[0];
    //console.log(newLocation);

    for(var j = 1; j<arr.length;j++){


        if(newLocation + j > arr.length){
            //answer[arr.length-newLocation+j+1] = arr[j];
        } else{
            answer[newLocation+j] = arr[j];
        }
        
        
        
        
    }

    


  }

  console.log(answer);
  return answer;
}

// console.time()
arrLeft([1, 2, 3, 4, 5], 2);
//console.timeEnd()