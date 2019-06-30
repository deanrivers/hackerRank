function birthdays(s,d,m){

    var answer = 0;
    var array = [];
    for(var i = 0; i<s.length;i++){
        
        //determine if next square works
        for(var j=0;j<=m;j++){
            console.log('i '  + i);
            
            if(s[i] + s[j+1] <= d ){
                // console.log(s[i]);
                // console.log(s[j+1]);
                
                console.log('j ' + j);
                array.push(s[i]);
                array.push(s[j+1]);
            }
        }

       // console.log(s[i])
    }

    console.log(array.length);
    return array.length;

}

birthdays([1,2,1,3,2],3,2);