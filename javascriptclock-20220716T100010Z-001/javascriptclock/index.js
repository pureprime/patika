document.getElementById("myClock");
setInterval(showTime,1000);
function showTime(){
var şuan = new Date();
var sa = şuan.getHours();
var sn = şuan.getSeconds();
var dk = şuan.getMinutes();
var gün= şuan.getDate();
var ay=şuan.getMonth();
document.getElementById("myClock").innerHTML=gün+"/"+ay+"/2022"+"<br>"+sa+":"+dk+":"+sn;
}
