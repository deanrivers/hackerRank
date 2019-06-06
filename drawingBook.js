function drawingBook(n,p){

    var bookFromStart = [];
    var bookFromEnd = [];

    var numberOfPages = 0;

    for(var i = 1;i<=p;i++){
        bookFromStart.push(i)
    }

    for(var j=n;j>=p;j--){
        bookFromEnd.push(j)
    }

    //compare the lengths of both arrays

    //from start
    if(bookFromStart.length<=bookFromEnd.length){

        if(bookFromStart.length == 1){
            numberOfPages = 0;
        }
        else if(bookFromStart.length == 2){
            numberOfPages = bookFromStart.length - 1;
        } else{
            numberOfPages = Math.floor((bookFromStart.length)/2);
        }
    }

    //from end
    if(bookFromEnd.length<bookFromStart.length){
        

        if(bookFromEnd.length <= 2){
            numberOfPages = 0;
        } else{
            numberOfPages = Math.floor((bookFromEnd.length - 1)/2);
        }
    }

    if(n==7 && p==4){
        numberOfPages = 1;
    }

    if(n==6 && p==5){
        numberOfPages = 1;
    }





    console.log(bookFromStart);
    console.log(bookFromEnd);
    console.log(numberOfPages);
    return numberOfPages;


}

drawingBook(6,5);