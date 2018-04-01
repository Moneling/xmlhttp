function getDate(url,success,fail,method){
var xmlhttp ;
var method = method ? method : "get";
if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest();
}else{
    xmlhttp = new ActiveXObject("Microsft.XMLHTTP");
}
xmlhttp.open(method,url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        success(xmlhttp.responseText);
    }else{
        fail(xmlhttp.responseText);
    }
}
}