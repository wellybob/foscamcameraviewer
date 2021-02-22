function GetCamData(f, b){
var storedCams= JSON.parse($.jStorage.get('camdata'+f));
//alert("item value from jStorage['camdata'+f]:  " + $.jStorage.get('camdata'+f));
//alert("jStorage['camdata'+f] with parse by 'array index number':  " + storedCams[b]);
//if no data in camdata, throws something: in creating html list, function do not run without data
//in cameralist2.html
if (typeof $.jStorage.get('camdata'+f)=='object'){return;}
else {
return storedCams[b];}}