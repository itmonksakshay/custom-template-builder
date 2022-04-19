const pascalTriangle =(length)=>{
	let a = [];
  
  	for(let i=0;i<length;i++){
    	let b =[]
        
      	for(let j=0;j<=i;j++){  
          
          if(j === i){
          	b.push(1)
          }else{

     		if(j ===0){
              b.push(a[i-1][j]+j)
			}else{
				b.push(a[i-1][j]+a[i-1][j-1])
			}
          	
          }
			
      	}
    	a.push(b);	
  	}
  	return a;
}
console.log(pascalTriangle(7))

