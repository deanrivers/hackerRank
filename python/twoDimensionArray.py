def hourGlass(arr):
    hourGlassSums = []
    hourGlasses = []
    hourGlassNumbers = []
    largestSum = 0
    hourGlassSum = 0
 
    #create hour glass
    for i in range(0,len(arr)):
        #print i
        #hourglass start point excludes arr[0] and arr[len(arr)]... first and last indeces
        if i !=0 and i !=len(arr)-1:
            #create hourglass starting here
            for j in range(0,len(arr[i])):
                #print j
                #hourglass start point excludes arr[i][0] and arr[i][len(arr[i])]... first and last indeces
                if j !=0 and j !=len(arr[i])-1:
                    hourGlassNumbers = []
                    #print j
                    # print 'begin here to find the hourglass'
                    #print 'This is an hourglass start point:', arr[i][j],'at:',arr[i],'at coordinate:',j
                    
                    #append hourglass numbers to hourglass array
                    #center
                    hourGlassNumbers.append(arr[i][j])

                    #top center
                    hourGlassNumbers.append(arr[i-1][j])

                    #top center right
                    hourGlassNumbers.append(arr[i-1][j+1])

                    #top center left   
                    hourGlassNumbers.append(arr[i-1][j-1]) 

                    #bottom center
                    hourGlassNumbers.append(arr[i+1][j])

                    #bottom right
                    hourGlassNumbers.append(arr[i+1][j+1])

                    #bottom left
                    hourGlassNumbers.append(arr[i+1][j-1])
                    
                    #append hourglass to master hourglass list
                    hourGlasses.append(hourGlassNumbers)   

    #detemine highest hour glass sum
    for item in hourGlasses:
        hourGlassSums.append(sum(item))

    print max(hourGlassSums)
    return max(hourGlassSums)
        
hourGlass([[-1,-1,0,-9,-2,-2],[-2,-1,-6,-8,-2,-5],[-1,-1,-1,-2,-3,-4],[-1,-9,-2,-4,-4,-5],[-7,-3,-3,-2,-9,-9],[-1,-3,-1,-2,-4,-5]])