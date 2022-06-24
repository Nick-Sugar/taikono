function Load(){
    //setInterval(function(), milliseconds)
}
window.addEventListener("load",event => {
    l_0 = document.getElementById("l_0")
    r_0 = document.getElementById("r_0")
    l_1 = document.getElementById("l_1")
    r_1 = document.getElementById("r_1")
    l_0.style.opacity = 0;
    l_1.style.opacity = 0;
    r_0.style.opacity = 0;
    r_1.style.opacity = 0;
});
window.addEventListener("keydown",(event) => {
    if(event.keyCode==38){
        VolUp()
    }
    if(event.keyCode==40){
        VolDw()
    }
    if(event.keyCode==39){     
        don()
    }
    if(event.keyCode==37){
        ka()
    }
});
document.addEventListener('keypress', (event) => {
    var keyName = event.key.toLowerCase();
    console.log(keyName)
    if(keyName == "j"){
        r_0.style.opacity = 1.0;
        don()
    }
    if(keyName == "f"){
        l_0.style.opacity = 1.0;
        don()
    }
    if(keyName == "k"){
        r_1.style.opacity = 1.0;
        ka()
    }
    if(keyName == "d" ){
        l_1.style.opacity = 1.0;
        ka()
    }
});
document.addEventListener('keyup', (event) => {
    var keyName = event.key.toLowerCase();
    if(keyName == "j"){
        r_0.style.opacity = 0;
    }
    if(keyName == "f"){
        l_0.style.opacity = 0;
    }
    if(keyName == "k"){
        r_1.style.opacity = 0;
    }
    if(keyName == "d" ){
        l_1.style.opacity = 0;
    }
});

function don(){
    console.log("don")
    new Nodo(0)
    const d = new Audio('musics/don.wav');
    d.play();
}

function ka(){
    console.log("ka")
    new Nodo(1)
    const k = new Audio('musics/kan.wav');
    k.play();
}
function VolUp(){
    console.log("Volume Up")
}
function VolDw(){
    console.log("Volume Down")
}
function removenode(nodo){
    nodo.remove();
}
class Nodo{
    nodo = document.createElement("img")
    constructor(type) {    
        this.type = type;
        if(this.type == 0){
            this.nodo.src = 'img/don.png';
        }
        else{
            this.nodo.src = 'img/kan.png';
        }
        document.getElementById("field").appendChild(this.nodo)
        this.nodo.style.position = "relative";
        this.anime = this.nodo.animate(
            [
                {
                    transform: "translate(450px,100px)",
                    offset: 0
                  },
                  {
                    transform: "translate(100px,100px)",
                    offset: 1,
                  }
          
            ],
            {
              duration: 1000,
              fill: 'forwards',
              easing: 'ease'
            }
        );
        this.anime.addEventListener('finish', event => { this.nodo.remove()})
    }
}