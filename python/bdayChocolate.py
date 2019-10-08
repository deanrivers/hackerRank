def birthdayChocolate(s,d,m):
    chocolateBar = s
    lengthSegments = [[]]

    for i in range(len(chocolateBar)):
        
        for j in range(i, len(chocolateBar)-1):

            if len(lengthSegments[i]) < m:
                lengthSegments[i].append(j)
                print j


birthdayChocolate([2,2,1,3,2],4,2)