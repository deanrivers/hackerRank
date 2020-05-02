function birthdays(s,d,m){

    var chocolateArray = s;
    var day = d;
    var month = m;

    var answer = 0;
    var array = [];

    var complementAdd = 0;

    var currentSum = 0

    for(var i = 0; i <=chocolateArray.length;i++){

        for(var j = i+1; j<=month;j++){
            // currentSum = currentSum + chocolateArray[j];
            // console.log('Current Sum: '+currentSum+' at i:'+i)

            //run through a segment startng at i.
            if(currentSum<day && j+1<month){
                
                console.log(chocolateArray[i],chocolateArray[j])
                console.log('Day: '+day)
                console.log('Month: '+month)
                currentSum = currentSum + chocolateArray[j]
                
              
            } else{
                i = month;
            }

            //if all criteria is met, increase answer by 1
            if(currentSum == day && j+1==month){
                console.log('Possibility triggered at indeces: '+i,j)
                answer++;
                j=month;
            }
        }

        
    }
    

}



birthdays([1,2,1,3,2],3,2);