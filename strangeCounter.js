function strangeCounter(t){
    var tstart = 1;
    var vstart = 3;

    var answer = 0;

    //create cycles
    var dict = [];

    //main cycle
    for(var i = 1; i<10000 ;i++){
        //console.log("This is cycle: " + i);
        //array 2nd level
        for(var j = vstart;j>0p;j--){
            dict.push([tstart,j])

            if(tstart == t){
                //answer = dict[i][tstart];
                //console.log('This is the dictionary: \n');
                answer = dict[tstart-1][1];
                j = 0;
                i = 10000
                
            }
            
            //console.log(t);
            tstart++;
        }
        //console.log(dict);

        vstart = vstart*2;

    }

    console.log(answer);
    return answer;
    

    


}

strangeCounter(3)