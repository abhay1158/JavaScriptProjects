const form = document.querySelector("form");

// We add eventListener of "submit" type and prevent default functioning of submit type event
//--(by default when we submit form the post and get request is happened and the the values is get into the url)
//so we prevent it here
form.addEventListener("submit",function(event){
    event.preventDefault();

    // We did not take these values outside eventListener because when the page lode
    // the null value get into these
    // All the value which we take input is in String so We have to typecast the upcoming values into integer.
    const height = (Number) (document.querySelector("#height").value);
    const weight =(Number) (document.querySelector("#weight").value);

    const result= document.querySelector("#results");

    if(height === '' || height<=0 || isNaN(height)){
        result.textContent = `$Please give a valid height You provide {height}`;
    }
    if(weight === '' || weight<=0 || isNaN(weight)){
        result.textContent = `$Please give a valid height You provide {height}`;
    }
    
    
})