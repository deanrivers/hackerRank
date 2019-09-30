// k is threshold
//a is time for each student. a > 0 === late; a <=0 === on time or early



function angryProfessor(k,a){
    const threshold = k;
    const studentTimes = a;
    var onTimeCounts = 0;
    var isCancelled = true;

    for(var i = 0; i<studentTimes.length;i++){
        console.log(threshold)
        
        if(studentTimes[i] <= 0){
            onTimeCounts++;
        }
        console.log(onTimeCounts + ' at iteration: ' + i)
        if(onTimeCounts >= threshold){
            return 'NO'             
        }

    }
    return 'YES'
    
}

const x = angryProfessor(3,[0,-1,2,1])
console.log(x)
