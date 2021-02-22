function CreateCamData(){
var camdata=new Array();

//manuális törléshez: $.jStorage.deleteKey('camdata3');

//if storage is null, the type is object, if it is with value, it is a string
//if storage variable is empty, store values, if not, stpes to next variable
var typ0=typeof $.jStorage.get('camdata0');
var typ1=typeof $.jStorage.get('camdata1');
var typ2=typeof $.jStorage.get('camdata2');
var typ3=typeof $.jStorage.get('camdata3');
//kiíratás: alert("camdata0:   "+typ0);
if (typ0=='object') {var f=0;}
else if (typ1=='object') { var f=1;}
else if (typ2=='object') { var f=2;}
else if (typ3=='object') { var f=3;}

//data from DataInputFieldToAddNewCamera.html
var camname=document.datainput.elements[0].value;
var camurl=document.datainput.elements[1].value;
var camport=document.datainput.elements[2].value;
var camusername=document.datainput.elements[3].value;
var campassword=document.datainput.elements[4].value;

camdata[f]=[camname, camurl, camport, camusername, campassword];
$.jStorage.set('camdata'+f, JSON.stringify(camdata[f]));
var storedCams= JSON.parse($.jStorage.get('camdata'+f));

var storedCams= JSON.parse($.jStorage.get('camdata1'));
}