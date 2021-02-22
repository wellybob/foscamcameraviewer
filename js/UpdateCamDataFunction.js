function UpdateCamData(){
//data from DataInputFieldToAddNewCamera.html
var camdata=new Array();
var camname=document.datainput.elements[0].value;
var camurl=document.datainput.elements[1].value;
var camport=document.datainput.elements[2].value;
var camusername=document.datainput.elements[3].value;
var campassword=document.datainput.elements[4].value;
var f=localStorage.getItem("CamLocator");
camdata[f]=[camname, camurl, camport, camusername, campassword];
$.jStorage.set('camdata'+f, JSON.stringify(camdata[f]));
//var storedCams= JSON.parse($.jStorage.get('camdata'+f));
}