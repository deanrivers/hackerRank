//1. elements of first array are all factors of number being considered
//2. The integer being considered is a factor of all elements of the second array


function getTotalX(a,b){

    
    var factors = false;

    var answer = [];

    //first loop
    for(var i=0;i<100;i++){

      
        //criteria one
        for(var j=0;j<a.length;j++){
            
            if(i%a[j]==0){
                factors = true;
                console.log(a[j])
                console.log('Triggered at : ' + i);
            } else(factors = false);
            console.log(factors)

            if(factors==false){
                j=100;
            }
        }

        //if first criteria was passed...
        if(factors){
            for(var k=0;k<b.length;k++){
                if(b[k]%i!=0){
                    factors = false;
                    
                }
            }
            //push to array if i meets all criteria
            if(factors){
                answer.push(i);
                
            }

        }
        
        


       
    }
    //console.log('test')
    console.log(answer);
    console.log(answer.length);


    return answer.length;
}

getTotalX([1],[100])


// function getTotalX(a, b) {
//     let validCount = 0;
    
//     for (let x = 1; x <= 100; x++) {
//         if (a.every(int => (x % int == 0))) {
//             if (b.every(int => (int % x == 0))) {
//                 validCount++;
//             }
//         }
//     }

//     return validCount;
// }