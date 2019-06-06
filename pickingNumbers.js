function pickingNumbers(a){
    let array = a.sort(function(a, b){return a - b});

    var subarray=[];
    var num = 0;
    var r = a.length;
    var sum = 0;
    //create number of entries;
    for( var i=0; i<r; i++ ) {
        subarray.push( [] );
        
      }

    //create subarray
    for(var i=0;i<array.length;i++){
        //find complements of current number and push
        for(var j=i+1;j<array.length;j++){
            sum = Math.abs(array[i]-array[j]);
            if(sum <= 0){
                subarray[i].push(array[i]);
                subarray[i].push(array[j]);

            }
        }
        

       
        
    }

    console.log(subarray)


}

pickingNumbers([4,6,5,3,3,1]);

//[3,3,4]
//[5,6]