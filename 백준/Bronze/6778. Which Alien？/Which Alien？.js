const [antenna, eyes] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
if(antenna >= 3 && eyes <= 4) console.log("TroyMartian");
if(antenna <= 6 && eyes >= 2) console.log("VladSaturnian");
if(antenna <= 2 && eyes <= 3) console.log("GraemeMercurian");