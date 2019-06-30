function purchase(keyboards,drives,b){
    var maxBudget = b;
    var currentSum = 0;
    var max = 0;

    for(var i=0;i<keyboards.length;i++){

        for(var j=0;j<drives.length;j++){
            currentSum = keyboards[i]+drives[j];
            if(currentSum <= maxBudget && currentSum > max){
                max = currentSum;
            } else if(max == 0){
                max = -1;
            }
        }
    }

    

    console.log(max);

    return max;
}

purchase([4],[5],5);