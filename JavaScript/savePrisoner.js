function savePrisoner(n,m,s){

    var warnSeat = 0;
    var sweetsCount = m;
    var seat = s-1;

    while(sweetsCount > 0){
        //restart rotation
        if(seat === n){ 
            seat = 1;
        } else{ //after sweet has been handed...increase seat nunmber by 1.
            seat++;
        }
        console.log('Sweet: '+sweetsCount+' at seat: '+seat);  

        //decrease sweets by 1
        sweetsCount--;      
    }

    warnSeat = seat;
    console.log(warnSeat)
    return warnSeat
}
savePrisoner(352926151,380324688,94730870)

352926151
380324688