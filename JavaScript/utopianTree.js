// spring height*2
// summer height+1

function utopianTree(n){
    var height = 1

    for(var i = 0; i<n;i++){

        //even cycle
        if(i%2===0){
            height = height*2
        } else{ //odd cycle
            height++
        }
    }

    console.log(height)
    
}

utopianTree(4)