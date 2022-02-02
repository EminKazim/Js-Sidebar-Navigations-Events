//let main=document.getElementById("main");
//let ul =document.getElementById("ul");
/*
console.log(ul.parentNode.parentElement);
console.log(ul.nextSibling);
console.log(main.previousSibling);
console.log(main.children[0].value);
*/
/*
ul.children[0].onclick=function(){
    this.parentNode.parentNode.style.backgroundColor="teal";
}*/

let input = document.getElementById("num");
let ul = document.getElementById("ul");
input.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
      ul.innerHTML="";
    for (let i = 1; i <= this.value; i++) {
      let li = document.createElement("li");
      let icon=document.createElement("i")
      li.className = "list-group-item";
      li.innerText=i;
      icon.className="fas fa-times";
      icon.style.float="right";
      li.append(icon);
      ul.append(li);
      icon.onclick =function(){
        li.remove();
      }
    }
    this.value ="";
  }
});