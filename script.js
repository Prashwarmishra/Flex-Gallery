const panels=document.querySelectorAll(".panel");

function updateSize(){
    this.classList.toggle("open");
}

function updateText(event){
    if(event.propertyName.includes("grow")){
        this.classList.toggle("active");
    }
}

for(let panel of panels){
    panel.addEventListener("click", updateSize);
    panel.addEventListener("transitionend", updateText);
}