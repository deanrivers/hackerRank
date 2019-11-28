function rs(s,n){
    var string = s.split('');
    var aMultiple = 0;
    var aCount = 0;
    var ratio = 0;
    var remainder = 0;
    var aRemainderCount = 0;

    //find ratio
    for(var i = 0; i<=string.length;i++){
        if(string[i] == 'a'){
            aMultiple++;
        }
    }

    //determine how many a's there will be in the complete string
    ratio = n/string.length;
    remainder = n%string.length;
    //console.log(remainder)

    //if n evenly divides into subset string length
    if(remainder == 0){
        aCount = ratio*aMultiple
    } else if(remainder != 0){ //if not...determine how many a's should be added
        for(var j = 0; j<remainder; j++){
            if(string[j] == 'a'){
                aRemainderCount++                
            }
        }
        aCount = Math.floor(ratio)*aMultiple + aRemainderCount
    }
    console.log('a multiple: ' + aMultiple);
    console.log('Ratio: ' + ratio);
    console.log('a count: ' + aCount);
    console.log('remainder: ' + remainder);
    return aCount;
}

rs('abcac',10)

//'abcac abcac'