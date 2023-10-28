function promiseFunction(){  
    return new Promise((resolve,reject)=>{  
      setTimeout(()=>{  
        resolve("Promises Resolved");  
      },3000);  
    })  
  }

/*this.promiseFunction().then( 
	succ => {
			console.log('success');
	}, reject => {
		console.log('reject');
	} );*/
	
this.promiseFunction().then( successData => {  
        console.log("success");  
      },  
      rejectData => {  
        console.log("reject");  
      }  
    ); 