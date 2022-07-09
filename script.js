/// get all buttons 
let noOfDrumButtons = document.querySelectorAll(".drum").length

// add events to all buttons
for(let i =0; i<noOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       let buttonInnerHTML = this.innerHTML;

       /// specify what button does what 
        switch(buttonInnerHTML){
            case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3")
                tom1.play()
            break; 
            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3")
                tom2.play()
            break; 
            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3")
                tom3.play()
            break; 
            case "d":
                let tom4 = new Audio("./sounds/tom-4.mp3")
                tom4.play()
            break; 
            case "j":
                let snare = new Audio("./sounds/snare.mp3")
                snare.play()
            break; 
            case "k":
                let kick = new Audio("./sounds/kick-bass.mp3")
                kick.play()
            break; 
            case "l":
                let crash = new Audio("./sounds/crash.mp3")
                crash.play()
            break; 



            default: 
            break; 
        }
    }) 
}

/// add event listeners to keyboard buttons 
document.addEventListener("keydown", function(event){
    // keyboard takes event. 
    // depends on event sound will play 
    
    switch(event.key){
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
        break; 
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
        break; 
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
        break; 
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
        break; 
        case "j":
            let snare = new Audio("./sounds/snare.mp3")
            snare.play()
        break; 
        case "k":
            let kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
        break; 
        case "l":
            let crash = new Audio("./sounds/crash.mp3")
            crash.play()
        break; 



        default: 
        break; 
    }
})



//let audio = new Audio("./sounds/tom-1.mp3")
 //       audio.play()