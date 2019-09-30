function viral(n){
    var peopleReceived = 5;
    var peopleLiked = 0;
    var peopleLikedCumulative = 0;

    for(var i = 1; i<=n;i++){
        if(n===1){
            peopleLiked = Math.floor(peopleReceived/2);            
        }
        if(n>1){
            peopleLiked = Math.floor(peopleReceived/2);
        }        
        peopleReceived = peopleLiked*3
        peopleLikedCumulative = peopleLikedCumulative + peopleLiked
        //console.log('People liked: '+peopleLiked+ ' at day: ' + i)
        //console.log('Cumulative: ' + peopleLikedCumulative)        
    }
    console.log(peopleLikedCumulative)
    return peopleLikedCumulative
}

viral(3)