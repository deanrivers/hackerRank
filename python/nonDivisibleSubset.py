def nonDivisibleSubset(s,k):
    setMax = max(s)
    setMin = min(s)
    possibleComplements = []
    fullSet = s

    #hold all subsets
    subsets = []
    
    #hold current subset in question
    currsentSubset = []

    for number in fullSet:
        #determine possible complements for this number
        for complement in range(setMin,setMax):
            if((number+complement)%k==0):
                possibleComplements.append(complement)

        #try and find these complements in the rest of the array. All numbers in the array must be able to be added and then divided into 4 evenly
        for idx, subNumber in enumerate(possibleComplements):
            if(subNumber in fullSet):
                if(subNumber is not number):
                    subsets[idx].append(subNumber)
        
    
        print(number,possibleComplements,subsets)
        possibleComplements = []


nonDivisibleSubset([19,10,12,10,24,25,22],4)

#S=[19,10,12,10,24,25,22]
# k=4
# e.g. -> S1[0]=[10,12,15].....  S1[1]=[19,22,24]....max is length of 3..... and 2 numbers added in the subsets have a sum that is not divisible by k