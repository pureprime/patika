function newElement(){

const o = document.getElementById("task").value;
  // const p = document.getElementById("liveToastBtn").value;
if(o == 0){

}else{
let button = document.createElement('button');
let div = document.createElement('div');

div.setAttribute("class","col-12 d-flex justify-content-between align-items-center my-4 liclass");
button.setAttribute("class","btn btn-outline-primary");
button.setAttribute("onclick","yapildi()");
button.setAttribute("name","button");
button.setAttribute("type","button");
button.setAttribute("value","");
button.innerHTML=`<i class="bi bi-check2"></i> Yapıldı`;
div.innerHTML= o;
const row=document.querySelector(".row");
row.appendChild(div);
div.appendChild(button);

button.addEventListener("click", function (){
  row.removeChild(div);
});

localStorage.setItem("to do list",o);
// const row2=document.querySelector(".row");
// row.appendChild(button);
 // const row2=document.querySelector(".liclass");
 //  row2.appendChild(button);
}
}
newElement();
