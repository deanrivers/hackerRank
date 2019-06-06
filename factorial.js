function factorial(n){
    let fact = 1;

    for (let i = 2; i <= n; i++){

        if(Number.isSafeInteger(fact*i)){
            fact = fact * i;
        }
        else {
            //fact = fact + fact + .. i times
            let factxi = "0";  // this is (fact * i) for us.
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());  
            }
            fact = factxi; // update value of fact before continuing the loop.
        }
    }

    return fact;
    
}

factorial(25);