const form = document.querySelector("form");
// const btn = document.querySelector("#calc");
// We add eventListener of "submit" type and prevent default functioning of submit type event
//--(by default when we submit form the post and get request is happened and the the values is get into the url)
//so we prevent it here
// btn.addEventListener("click",function(event){
    form.addEventListener("submit",function(event){
    console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target);

    event.preventDefault();

    // We did not take these values outside eventListener because when the page lode
    // the null value get into these
    // All the value which we take input is in String so We have to typecast the upcoming values into integer.
    const height = (Number) (document.querySelector("#height").value);
    const weight =(parseInt) (document.querySelector("#weight").value);

    const result= document.querySelector("#results");

    // handling of edge cases
    if(height === '' || height<=0 || isNaN(height)){
        result.innerHTML = `Please give a valid height You provide ${height}`;
    }
    else if(weight === '' || weight<=0 || isNaN(weight)){
        result.innerHTML = `Please give a valid height You provide ${height}`;
    }
    else{
        // Use .toFixed() to fix the values after decimal
        const bmi=(weight/(height**2)).toFixed(2);
        result.innerHTML = `<span>Your BMI is :- ${bmi}</span>`;
        

    const guide = document.getElementById("weight-guide");
        if(bmi<18.6){
            const inst = guide.querySelector("p: nth-child(2)");
            result.innerHTML = `${inst}`
        }
        if(bmi>=18.6 && bmi<=24.9){
            const inst = guide.querySelector("p: nth-child(3)");
            result.innerHTML = `${inst}`;
        }
        if(bmi>24.9){
            const inst = guide.querySelector("p: nth-child(4)")
            result.innerHTML = `${inst}`;
        }
        
    }
    height='';
    weight='';
    
})