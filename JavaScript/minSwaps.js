function minSwaps(arr){
    var minSwaps = 0;
    var sorted = false;
    var numbersSorted = true;

    var max = Math.max(...arr);
    var min = Math.min(...arr);

    var unsortedArr = arr

    //do this until everything is sorted
    while(!sorted){

        //determine 2 swap locations
        for(var i = 0; i<unsortedArr.length;){
            //one-step swaps
            if(unsortedArr[i] > unsortedArr[i+1]){
                firstNumberSwap = i
                secondNumberSwap = i+1
                console.log('Swap initialized at this index for i =  '+ unsortedArr[i])
                //perform swap
                unsortedArr = swap(unsortedArr,firstNumberSwap,secondNumberSwap)

                //restart loop on swap
                i=0;
                //i++
                
                minSwaps++
            } else{
                i++;
            }
        }
        //determine if the numbers are sorted
        //set sorted to true
        sorted = true
    }

    console.log('Sorted array: '+unsortedArr)
    console.log('Min swaps: '+minSwaps)
}

//swap function
function swap(arr,x,y){
    firstNumber = arr[x]
    secondNumber = arr[y]

    arr[x] = secondNumber
    arr[y] = firstNumber

    console.log(arr)
    return arr
}

//swap([1,2,3],0,1)

minSwaps([7,1,100,4,2,4,5,6])


if this number at i is not