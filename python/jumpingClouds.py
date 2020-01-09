def jumpingClouds(c,k):

    cloudPosition = 0
    energyUsed = 0
    energyLeft = 100
    gameContinue = True
    moveCount = 1

    while gameContinue:

        print cloudPosition
        if cloudPosition%len(c)==1:
            print 'Returned to start at Move Count: ', moveCount
            #print 'Cloud position: ', cloudPosition
            gameContinue = False

        #jump by k
        cloudPosition = cloudPosition + k

        #increase move count by 1
        moveCount = moveCount + 1

    energyLeft = energyLeft - energyUsed

    print energyLeft
    return energyLeft
        

    



jumpingClouds([0,0,1,0,0,1,1,0],2)

#each jump is of size k into cloud c[(i+k)%n] where n is the jump number
#0 = cumulus -> -1 energy
#1 = thunder -> -3 energy

#determine her energy at the end of her rotation