def pdf_viewer(heights,string):

    #declare variables
    maxHeight = 0
    area = maxHeight * len(string)
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
        'z': 0,


    }

    #determine maxHeight
    for i in heights:
        if i > maxHeight:
            maxHeight = i
        
    #match letter with height value
    print(dict)
        
    pass

    
    return area

pdf_viewer((0,3,0,3,0,4,0,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5),'abc')
