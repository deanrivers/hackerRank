def array(arr):
    arr.reverse()

    string = ''

    for item in arr:
        string = string + str(item) + ' '

    print string
    return string

array([1,2,3])