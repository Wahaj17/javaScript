

for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSoundOnKey(buttonInnerHTML);
        animateButton(buttonInnerHTML);
    }); 
}

document.addEventListener("keydown", function(event){
    makeSoundOnKey(event.key);
    animateButton(event.key);
});

function animateButton(e){
    var animatedButton = document.querySelector("."+e);
    animatedButton.classList.add("pressed");
    setTimeout(function(){
        animatedButton.classList.remove("pressed");
    }, 100);
}


function makeSoundOnKey(e){
    switch (e) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
}




