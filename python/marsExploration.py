def mars(str):
    message = list(str)
    incorrect_characters = 0
    i = 0

    while i < len(message):
        # print i
        for j in range(i,i+3,1):
            #print j, i, message[j]
            #determine if each letter is correct
            if j == i+0 and message[j] != 'S':
                #print message[j], j
                incorrect_characters = incorrect_characters + 1
            if j == i+1 and message[j] != 'O':
                #print message[j], j
                incorrect_characters = incorrect_characters + 1
            if j == i+2 and message[j] != 'S':
                #print message[j], j
                incorrect_characters = incorrect_characters + 1
        i = i + 3
        

    #print 'incorrect characters: ', incorrect_characters
    return incorrect_characters

x = mars('SOSSPSSQSSOR')
print x