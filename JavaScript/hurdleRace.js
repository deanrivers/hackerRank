function hurdleRace(arr,k){
    const danMaxHeight = k;
    const maxHurdleHeight = Math.max(...arr);
    var potionValaue = maxHurdleHeight - danMaxHeight;

    
    if(potionValaue < 0 ){
        potionValaue = 0;
    }
    
    console.log(potionValaue)
    return potionValaue
}

hurdleRace([2,5,4,5,2],7)
