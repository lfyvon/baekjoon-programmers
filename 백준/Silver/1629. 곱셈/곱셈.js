const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

function pow(a, n){
    if(n == 0){
        return BigInt(1); 
    }else{
      const temp = pow(a, BigInt(parseInt(n / BigInt(2))))
      if(n % BigInt(2) == 0){
        return  (temp * temp) % c;
      }else{
        return (temp * temp * a) % c;
      }
    }
  }
  
  
  console.log(parseInt(pow(a ,b)))