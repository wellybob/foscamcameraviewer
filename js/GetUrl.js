function GetUrl(f){
var url="http://"+GetCamData(f,1)+":"+GetCamData(f,2)+"/CGIProxy.fcgi?cmd=snapPicture2&usr="+GetCamData(f,3)+"&pwd="+GetCamData(f,4)+"&t=";
return(url);}