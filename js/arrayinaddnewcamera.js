//part of addnewcamera: get data from input fields
//camera name array created
function addnew(){var camname= new Array();
//test line: sets value of 4th element of the array
//camname[3]="the 4th camera is here";
//check type of 4th camera name
var type0=typeof camname[3];
//if it is NOT undefined
//if camera set is under 4: it set the value
//push method will set value of a localStorage element
//push method needs a separate function: it is good for add new cam from menu
//!!!if loop needs an exit point if camname is max
if (type0 != 'undefined')
	{document.writeln("max. number of cameras reached!");}
	else {		camname.push("we2Ű");
						document.writeln(camname[0]);}
}