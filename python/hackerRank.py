def hackerRank(str):
    letters = list(str)
    comparison_letters = 'hackerrank'
    answer = []
    a_count = 0
    k_count = 0
    r_count = 0

    for i in range(len(letters)):

        #handl a
        if letters[i] == 'a' and len(answer) > 4:
            answer.append(letters[i])
            a_count = a_count + 1

        #handle k
        if letters[i] == 'k' and k_count <2 and len(answer) > 6:
            print k_count, i
            answer.append(letters[i])
            k_count = k_count + 1
            

        #handle r
        if letters[i] == 'r' and r_count <2:
            answer.append(letters[i])
            r_count = r_count + 1

 
        
        #get every other letter
        if letters[i] not in answer:
            answer.append(letters[i])
            if letters[i] == 'k':
                k_count = k_count + 1

    
    seperator = ''
    x = seperator.join(answer)

    if x == comparison_letters:
        return 'YES'
    else:
        return 'NO'

x = hackerRank('hereiamstackerrank')
print x

#1. compare letter to 