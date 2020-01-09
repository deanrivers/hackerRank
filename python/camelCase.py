def camelCase(s):
    #put letters into a list
    array = list(s)

    #determine initial value of wordCount
    if len(s) >0:
        wordCount = 1
    else:
        wordCount = 0

    #loop through letters and determine if a capital letter appears
    for letter in array:
        if letter.isupper():
            wordCount = wordCount + 1

    return wordCount



print camelCase('blah123Boy')