def pangrams(str):
    x = str.lower()
    statement = list(x)
    unique_letters = []

    for letter in statement:
        if letter not in unique_letters and letter != ' ':
            unique_letters.append(letter)
    
    if len(unique_letters) == 26:
        return 'panagram'
    else:
        return 'not panagram'



pangrams('We promptly judged antique ivory buckles for the next prize')