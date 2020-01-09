import math

def squares(a,b):
    count = 0
    lowestSquare = math.ceil(math.sqrt(a))
    highestSquare = int(math.sqrt(b))

    #determine how many squares there are
    for number in range(lowestSquare,highestSquare+1):
        if(number!=1):
            count+=1

    print(lowestSquare, highestSquare)
    print(count)
    return count

squares(1,49)