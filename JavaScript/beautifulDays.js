function beautifulDay(i,j,k){
//beautiful day -> |i - i(reverse)|%k === 0
    var array = [];
    var reverseNum = 0;
    var reversedNumberArray = []
    var beautifulDays = 0

    
   for(var step = i; step <= j; step++){
       array.push(step)
   }

   for( var j = 0;j<array.length;j++){
    //    reverseNum = parseInt(String(array[i]).reverse());
    reversedNumberArray = String(array[j]).split("")
    var x = reversedNumberArray.reverse()
    var y = x.join('')
    var z = parseInt(y) //use this number as the reverse
    var numerator = Math.abs(array[j]-z)
    //console.log(numerator)


    if (numerator%k===0){
        //console.log( array[j]+' is a beautiful number. '+'Numerator: '+numerator)
        beautifulDays++
    }
   }
   console.log(beautifulDays)
   return beautifulDays
}

beautifulDay(20,23,6);