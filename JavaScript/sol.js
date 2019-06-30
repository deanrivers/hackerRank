function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    var array = A.sort;
    var max = 0;
    var min = 1;
    
    for(var i=0; i<=array.length;i++){
        
        for(var j=0;j<=array.length;j++){

            if(min == array[j] && marray[j+1] != min ){
                min += 1;
                console.log(min);
            }
        }

        //console.log(min);
        


        
        
        

        
        
    }

    
    
    

    

    console.log(max)

    
    
}

solution([110,2,3,4,5,10,9,100,20,90]);