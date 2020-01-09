def pdf_viewer(heights,string):

    #declare variables
    maxHeight = 0
    
    calculateHeights = []
    word = list(string)
    # print word

    dict = {
        'a': 0,
        'b': 0,
        'c': 0,
        'd': 0,
        'e': 0,
        'f': 0,
        'g': 0,
        'h': 0,
        'i': 0,
        'j': 0,
        'k': 0,
        'l': 0,
        'm': 0,
        'n': 0,
        'o': 0,
        'p': 0,
        'q': 0,
        'r': 0,
        's': 0,
        't': 0,
        'u': 0,
        'v': 0,
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 1,
    }

    #update aplhabet with heights    
    for i, letter in enumerate(sorted(dict)):
        #print letter
        dict[letter] = heights[i]
    #print dict
    
    #process word to get values
    for letter in word:
        calculateHeights.append(dict[letter])
    maxHeight = max(calculateHeights)
    #print maxHeight

    #calculate area
    area = maxHeight * len(string)
    
    print dict
    print maxHeight
    print area
    return area

pdf_viewer([4,2,1,2,3,4,3,7,4,1,5,6,1,3,2,6,6,3,7,3,1,1,5,1,1,4],'qjhwkcexec')
