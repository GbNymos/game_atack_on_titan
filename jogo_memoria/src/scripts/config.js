const emojis=[
    "😂",
    "😂",
    "😊",
    "😊",
    "🤣",
    "🤣",
    "❤️",
    "❤️",
    "😍",
    "😍",
    "😒",
    "😒",
    "😘",
    "😘",
    "😁",
    "😁",
];
let openCards=[];


let random_emojis=emojis.sort(()=>
(Math.random()>0.5? 2:-1));

for(let i=0; i<emojis.length;i++){
    let box=document.createElement("div");
    box.className="item";
    box.innerHTML=random_emojis[i];
    box.onclick=handClick;
    document.querySelector(".game").appendChild(box)
}

function handClick(){
    if(openCards.length<2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length==2){
        setTimeout(checkTrue,500);
    }
}

function checkTrue(){
    if(openCards[0].innerHTML===openCards[1].innerHTML){
        openCards[0].classList.add("boxTrue");
        openCards[1].classList.add("boxTrue");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");      
    }
    openCards=[];

    if(document.querySelectorAll(".boxTrue").length === emojis.length){
        alert("Voce venceu!!");
    }
}