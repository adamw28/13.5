function time(sek){
var colors = require('colors');
sek=Math.floor(sek);
var min = sek / 60;
var s = sek % 60;
s = s.toString();
min=Math.floor(min);
var h = min / 60;
var m = min % 60;
m = m.toString();
h = Math.floor(h);
h = h.toString();
var uptime = h + ' godzin ' + m + ' minut ' + s + ' sekund';
console.log('Uptime: '.green, uptime); 
}

exports.time=time;