function main(str){
    var unformattedArray = str.split(':');
    var hours = parseInt(unformattedArray[0],10);
    var minutes = unformattedArray[1];
    var seconds = unformattedArray[2].substring(0,2);

    var answer = '';
    var finalHours = '';
    
    //check time of day
    if(unformattedArray[2].substring(2,4) == 'PM' && unformattedArray[0] != '12'){
        hours = hours + 12;
    }

    //check if 12AM
    if(unformattedArray[0] == 12 && unformattedArray[2].substring(2,4) == 'AM'){
        hours = '0' + (hours - 12).toString();
        console.log('triggered');
        
    }

    if(unformattedArray[0] == 12 && unformattedArray[2].substring(2,4) == 'PM'){
        
    }

    
    if(hours.toString().length == 1){
        hours = '0' + hours;
        console.log('Triggered')
    }
    answer = hours + ':' + minutes + ':' + seconds;

    console.log(answer);
 
    return answer;
}

main('12:00:00PM')