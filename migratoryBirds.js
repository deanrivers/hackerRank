function migratoryBirds(arr){
     var dictionary = [[],[],[],[],[]];
     var max = 0;
     var answer = 0;
    
    for(var i=0; i<arr.length;i++){

        //determine what array it should go into
        if(arr[i]==1){
            dictionary[0].push(arr[i]);
        }
        if(arr[i]==2){
            dictionary[1].push(arr[i]);
        }
        if(arr[i]==3){
            dictionary[2].push(arr[i]);
        }
        if(arr[i]==4){
            dictionary[3].push(arr[i]);
        }
        if(arr[i]==5){
            dictionary[4].push(arr[i]);
        }

    }

    //go through answer array and determine what should be returned
    for(var j=0;j<dictionary.length;j++){
        

        if(dictionary[j].length>max){
            max = dictionary[j].length;
            answer = dictionary[j][0];
        }
    }


    // console.log(dictionary)
    console.log(answer)
    return answer;

}

migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])
