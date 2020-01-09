#password must hit the following criteria
#1. length at least 6
#2  contains at least one digit
#3. contains at least one lowercase letter
#4. contains at least one uppercase letter
#5. contains at least one special character !@#$%^&*()-+

def validatePassword(n,password):
    #put password characters into a list
    password_array = list(password)

    special_characters_needed = 0
    characters_needed = 0

    #criteria
    numbers = "0123456789"
    lower_case = "abcdefghijklmnopqrstuvwxyz"
    upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    special_characters = "!@#$%^&*()-+"

    #validation cases
    numbers_valid = False
    lower_case_valid = False
    upper_case_valid = False
    special_characters_valid = False
    
    #immediately test length
    
    for character in password_array:
        if character in numbers:
            numbers_valid = True
        if character in lower_case:
            lower_case_valid = True
        if character in upper_case:
            upper_case_valid = True
        if character in special_characters:
            special_characters_valid = True
    
    if numbers_valid is False:
        special_characters_needed = special_characters_needed + 1
        #print 'number triggered'
    
    if lower_case_valid is False:
        special_characters_needed = special_characters_needed + 1
        #rint 'lower triggered'
    
    if upper_case_valid is False:
        special_characters_needed = special_characters_needed + 1
        #print 'upper triggered'
    
    if special_characters_valid is False:
        special_characters_needed = special_characters_needed + 1
        #print 'special triggered'
   
   #determine the actual number of characters needed to fulfill the criteria
    if n <6:
        characters_needed = 6 - n

    if characters_needed < special_characters_needed:
        characters_needed = special_characters_needed

    return characters_needed



print validatePassword(3,'Ab1')