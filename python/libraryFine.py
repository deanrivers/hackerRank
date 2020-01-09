def fine(d1,m1,y1,d2,m2,y2):
    return_date = d1
    due_date = d2

    fine = 0

    #check year
    if(y1>y2):
        fine = 10000
        print(fine)
        return fine
        

    #check month
    elif(m1>m2 and y1==y2):
        fine = 500*(m1-m2)
        print(fine)
        return fine
        

    #check day
    elif(d1>d2 and y1==y2 and m1==m2):
        fine = 15*(d1-d2)
        print(fine)
        return fine
        

    #if returned before the date
    else:
        fine = 0
        print(fine)
        return fine
        

fine(9,6,2015,6,6,2015)