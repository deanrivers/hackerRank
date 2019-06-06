function catMouse(x,y,z){
    let positionCatA = x;
    let positionCatB = y;
    let positionMouseC = z;
    var answer;

    let mouseFromA = Math.abs(positionMouseC - positionCatA);
    let mouseFromB = Math.abs(positionMouseC - positionCatB);
    
    //check which cat gets to the mouse first
    if(mouseFromA < mouseFromB){
        answer = 'Cat A';
    }
    if(mouseFromB < mouseFromA){
        answer = 'Cat B';
    }
    if(mouseFromA == mouseFromB){
        answer = 'Mouse C';
    }
    console.log(answer)
    return answer;
}

catMouse(1,6,3)