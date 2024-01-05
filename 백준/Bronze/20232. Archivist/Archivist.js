const year = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = "ITMO";
if( year == 1996 || year == 1997 || year == 2000 || 
    year == 2007 || year == 2008 || year == 2013 || year == 2018
) result = "SPbSU"
if(year == 2006) result = "PetrSU, ITMO";
console.log(result);