var CameraStream1=document.createElement("img");
var CameraStream2=document.createElement("img");
var CameraStream3=document.createElement("img");
var CameraStream4=document.createElement("img");
CameraStream1.setAttribute("src", GetUrl(0));
CameraStream2.setAttribute("src", GetUrl(1));
CameraStream3.setAttribute("src", GetUrl(2));
CameraStream4.setAttribute("src", GetUrl(3));
//a time interval ha 1-2 másodperc, akkor nem biztos a frissités az interval-on belül
//JQuery code: smooth refresh mode without img disappearing...throws new pic if any change
function ccamstream() {setInterval(updateImage, 10000);}
function updateImage() {
CameraStream1.src = CameraStream1.src.substring(0, (CameraStream1.src.lastIndexOf("t=")+2))+(new Date()).getTime();
$(window).reload(CameraStream1)
CameraStream2.src = CameraStream2.src.substring(0, (CameraStream2.src.lastIndexOf("t=")+2))+(new Date()).getTime();
$(window).reload(CameraStream1)
CameraStream3.src = CameraStream3.src.substring(0, (CameraStream3.src.lastIndexOf("t=")+2))+(new Date()).getTime();
$(window).reload(CameraStream1)
CameraStream4.src = CameraStream1.src.substring(0, (CameraStream4.src.lastIndexOf("t=")+2))+(new Date()).getTime();
$(window).reload(CameraStream1)
}