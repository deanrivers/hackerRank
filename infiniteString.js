function infiniteString(s,n){

    let str = s.split('');

    var divider = 1;
    
    var count = 0;

    var finalCount = 0;

    //how many a's in original
    for(var i = 0; i<str.length; i++){
        if(str[i] == 'a'){
            count++;
        }
    }

    //find ratio of a's to original
    divider = count/str.length;

    //perform math
    
    //if ratio is above .5
    if(divider > 0.5){
        finalCount = Math.ceil(n*divider);
    }
    

    //if ratio is below .5
    if(divider <= 0.5){
        finalCount = Math.floor(n*divider);

        
        
    }
    
  
    console.log(n*divider)
    console.log(str.length)
    console.log(count);
    console.log(divider);
    console.log(finalCount);
    return finalCount;
    
    
}

infiniteString('aba',10);

'aba aba aba a'