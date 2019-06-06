function bonApetit(bill,k,b){

    //bill is an array
    //k is the index number of the item in bill than anna is not paying for
    //b is the money charged to Anna
    //determine if b is correct
    //bcharged - bactual
    var bonApetit = "";
    var bactual = 0;
    var moneyOwed = 0;
    

    for(var i = 0;i<bill.length;i++){
        if(i != k){
            bactual+=bill[i];
        }
    }
    if(bactual/2 == b){
        bonApetit = "Bon Apetit";
        console.log(bonApetit);
    } else{
        bonApetit = "Not split fairly";
        moneyOwed = b-(bactual)/2;
        console.log(moneyOwed)
    }

    // console.log("Charged: "+ b);
    // console.log("Actual Cost: "+ bactual);
    // console.log("Money Owed: "+moneyOwed);

   
}

bonApetit([3,10,2,9],1,12)