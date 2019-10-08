def cutTheSticks(arr):
    arr.sort()
    sticksLeft = len(arr)
    lowestValue = arr[0]
    answer = []

    while sticksLeft > 0:
        #print number of sticks before iteration
        #print sticksLeft
        answer.append(sticksLeft)
        print arr
        
        #determine new lowest value and remove from arr.
        #run removal in loop to catch all instances of lowest values
        lowestValue = arr[0]
        for _ in range(arr.count(lowestValue)):
            arr.remove(min(arr))
        
        #subtract lowest value that from the other numbers in the array.
        for i in range(len(arr)):
            arr[i] = arr[i] - lowestValue
        
        sticksLeft = len(arr)

    print answer
    return answer

cutTheSticks([5,4,4,2,2,8])