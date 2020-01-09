def findDigit(n):
    count = 0
    arr = map(int,str(n))
    print arr

    for number in arr:
        if number!=0 and n%number==0:
            count = count + 1
    
    print count
    return count

    

    # answer = []

    # for item in n:
    #     #split each index for further evaluation
    #     arr = map(int,str(item))

    #     #find divisors
    #     count = 0
    #     for number in arr:
            
    #         if number != 0 and item%number==0:
    #             count = count + 1
    #             #print 'triggered for number:', number, 'at item:', item
    #     print count, 'for item:',item
    #     answer.append(count)
        

    # return answer
        
findDigit(1012)