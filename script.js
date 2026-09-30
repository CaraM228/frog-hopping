//Create a event listener to target a specific frog based on which key is pressed//

//Target the frog class
const frogs = document.querySelectorAll('.frog');

//State the current position of the frog
let currentPosition = 0;

//Listen for when user presses down arrow or "w,a,s,d" keys
document.addEventListener('keydown',(event) => {
    //create variable and prevent error from caps lock
    const key = event.key.toLowerCase();
    //Move right
    if (event.key === "ArrowRight" || key === "d"){
        //prevent user going too far right
        if (currentPosition === 1 || currentPosition === 3){
            return;
        }
        //Hide the currently shown frog
        frogs[currentPosition].classList.add("hidden");
        //Move one to the right
        currentPosition++;
        console.log(currentPosition);
        //Show frog at the new position
        frogs[currentPosition].classList.remove("hidden");
    };

    //Move left
    if(event.key === "ArrowLeft" || key === "a"){
        //prevent user going too far left
        if(currentPosition === 0 || currentPosition === 2){
            return;
        }
        frogs[currentPosition].classList.add("hidden");
        currentPosition--;
        console.log(currentPosition);
        frogs[currentPosition].classList.remove("hidden");
    };

    //Move down
    if(event.key === "ArrowDown" || key === "s"){
        //prevent user going too far down
        if(currentPosition === 2 || currentPosition === 3){
            return;
        }
        frogs[currentPosition].classList.add("hidden");
        currentPosition += 2;
        console.log(currentPosition);
        frogs[currentPosition].classList.remove("hidden")
    };

    //Move up
    if(event.key === "ArrowUp" || key === "w"){
        //prevent user going too far up
        if(currentPosition === 0 || currentPosition === 1 ){
            return;
        }
        frogs[currentPosition].classList.add("hidden");
        currentPosition -= 2;
        console.log(currentPosition);
        frogs[currentPosition].classList.remove("hidden");
    }
});