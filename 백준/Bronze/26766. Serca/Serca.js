const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const heart = ` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     
`;
console.log(heart.repeat(n).trimEnd());