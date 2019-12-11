const button = document.querySelector("button");

const myName =["asanka","pubudu","saman"];
const animals = document.querySelectorAll(".hum");
console.log(animals);

document.addEventListener("DOMContentLoaded",init);

function init(){
    myName.forEach(function(item){
        console.log(item);
        let div =document.createElement("div");
        div.setAttribute("class","animal "+item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click", function(){
            playit(item);
        })
        document.body.appendChild(div);
    })
}



function playit(name){
    
    let activeEle = document.querySelector("."+name);
    console.log(activeEle);
    let sound1 = new Audio("sound/"+name+".mp3");
    sound1.play();
    activeEle.classList.add("active");
    
    setTimeout(function(){
        activeEle.classList.remove(activeEle);
      },200)
}





