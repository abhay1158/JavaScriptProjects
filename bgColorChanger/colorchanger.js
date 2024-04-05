// We use querySelectorAll so that we can apply loop over that
// it give nodeList of All buttons.
const buttons =document.querySelectorAll(".button");

const body = document.querySelector("body");

//We use arrow function as callback function inside forEach
buttons.forEach((button)=>{
    button.addEventListener("click",function(event){
        console.log(event);
        console.log(event.target); // give the value where the event is occured
        const valueOfEvent = event.target.id;

        // Use switch case to change the color of background according
        // to event clicked on 
        switch(valueOfEvent){
            case grey: 
                body.style.backgroundColor="grey";
                break;

            case yellow: 
                body.style.backgroundColor="yellow";
                break;

            case white: 
                body.style.backgroundColor="white";
                break;

            case blue: 
                body.style.backgroundColor="blue";
                break;
        }
    })
})