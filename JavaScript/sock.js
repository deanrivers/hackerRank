function sock(n,ar){

	var arr = ar;

    var pairs = 0;


	for(var i=0;i<arr.length;i++){
	
	console.log('i: '+i);

		for(var j=i+1;j<arr.length;j++){



			// if(i==j && j==arr.length){
			// 	console.log('triggered')
	  //   		break;
	  //   	}

			if(arr[i] == arr[j] ){
				console.log('j: '+j);

				//console.log('triggered');
				// arr.splice(i,1);
				// arr.splice(j-1,1);
				console.log(arr.splice(i,1));
				console.log(arr.splice(j-1,1));

				console.log(arr);

				//incrememnt pairs
				pairs += 1;


				//reset iterators
				i=-1;
				j=-1;
				

	    		} 


	    		
	    	}

	    	

    }

   return pairs;

}

let result = sock(10,[1,1,3,1,2,1,3,3,3,3,1,1]);
console.log(result);




//sock([10,20,20,10,10,30,50,10,20]);