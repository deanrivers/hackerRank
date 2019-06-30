function jumpingClouds(arr) {

  var jumpCount = 0;
  var doubleJump = false;
  var i = 0;

  while(i<arr.length) {
    //reset this every iteration
    doubleJump = false;

    //double jump
    if(arr[i+1] == 0 && arr[i+2] == 0){
        console.log('Double jump at: ' + i);
        jumpCount++;
        i=i+2;
        doubleJump = true;
    }

    //single jump
    if(doubleJump == false){
        console.log('Single jump at: ' + i);
        jumpCount++;

        //we cannot land on a 1
        if(arr[i+1] == 1){
            i = i + 2;
        } else{
            i++;
        }

        //if we are at the end... decrease jumpcount by 1 since you can't jump passed the last cloud
        if(i == arr.length){
            
            jumpCount--;
        }

    }


    
  }
  console.log(jumpCount);
  return jumpCount;
}

jumpingClouds([0,1,0,1,0,0,0,1,0,1]);

//must avoid c[2] and c[5]
