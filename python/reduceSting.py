def reduceString(str):
    stringList = list(str)
    answer = []
    joined = ''
    
    i = 0

    while i < len(stringList):

        if i == len(stringList)-1:
            answer.append(stringList[i])
            print 'trig'
            i = i+1

        if i < len(stringList):
            if stringList[i] != stringList[i+1]:
                answer.append(stringList[i])
                i = i + 1
            else:
                i = i + 2

    if len(answer) == 0:
        print 'Empty String'
    else:
        separator = ''
        joined = separator.join(answer)
        print joined
    
reduceString('acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj')