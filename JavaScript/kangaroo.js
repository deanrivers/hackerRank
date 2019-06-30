function kangaroo(x1,v1,x2,v2){
    var result = false;
    var diverge = false;
    var output = "NO"
    var difference = [];
    var checkArray1 = [];
    var checkArray2 = [];
    
    //dummy variables
    var dummyx1 = x1;
    var dummyx2 = x2;
    var dummyv1 = v1;
    var dummyv2 = v2;

    //intial conditions
    if(x1>x2&&v1>v2){result=false;output="NO"}
    if(x2>x1&&v2>v1){result=false;output="NO"}
    if(x1==x2){result=true;output="YES"}

    //logic
    if(result==false){

        //determine if it is diverging
        for(var i=0;i<=1;i++){
            
            difference[i] = Math.abs(dummyx1-dummyx2);
            console.log(difference)

            if(difference[i] > difference[i-1]){
                diverge = true;
                
                i=1;
                console.log('Triggered at: ' + i)
            }
            dummyx1+=dummyv1;
            dummyx2+=dummyv2;
        }

        //not diverging contine here
        if(diverge==false){
            
            console.log(x1);
            console.log(x2);

            while(result==false){
                if(x1==x2){
                    output="YES"
                    result = true;
                    console.log('equal');
                }

                //determine if x1 has passed x2 or vice versa...stop
                if(x1<x2 && x1+v1 >x2+v2){
                    result = true;
                    console.log('first triggered');
                    output = "NO";
                }

                if(x2>x1 && x2+v2 > x1+v1){
                    result = true;
                    console.log('second triggered');
                    console.log(x1);
                    console.log(x2);
                    output = "NO"
                }
                



                x1+=v1;
                x2+=v2;

                
            }
        }


    }

    console.log(output);
    return output;


}

kangaroo(0,3,4,2);