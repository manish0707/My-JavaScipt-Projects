// variables

const form = document.querySelector("#form");
const result  = document.getElementById("result");
const html = new HTMLUI();




eventListners();

function eventListners(){

// addEventListener
    document.addEventListener("DOMContentLoaded", function(){

        html.displayYear();
    });

//When the form is submitted

    form.addEventListener("submit", function(event){

        result.style.display = "none";
        

        event.preventDefault();
        const make = document.getElementById("make").value;

        const year = document.getElementById("year").value;
        //Read the value of radio button
        const level = document.querySelector("input[name='level']:checked").value;
        
        //Check all the fields are filled 

        if( make==="" || year==="" || level==="" ){
            html.displayError("All Fields are mandotary!");
        } else {

            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);

            //Print the result from the HTML UI

            const img = document.querySelector("img");

            img.style.display = "block";
            
            setTimeout(() => {

                html.showResult(price,insurance);
                img.style.display = "none";
                result.style.display = "block";

                
            }, 2500);

        }
        
    });

}

//Everything relate to the quotation

function Insurance(make, year, level){
    this.make = make;
    this.year = year;
    this.level = level;
}

Insurance.prototype.calculateQuotation = function(insurance){
    let price;
    const base = 2000;

    //get the make

    const make = insurance.make;

    /*
    1 = American 15%
    2 = Asian 5%
    3 = Europen 35%
     */

    switch(make){
        case "American":
            price = base*1.15;
            break;
        case "Asian":
            price = base * 1.05;
            break;
        case "European":
            price = base * 1.35;
            break;
    }
    // console.log(price);

    //Get year difference

    const year  = insurance.year;

    const yearDiffernce =  this.getyearDifference(year);

    //Each year 3% should be less

    price = price - ((yearDiffernce*3) * price)/100;

    // console.log(price);

    //Levels

    const level = insurance.level;

    price = this.calculateLevel(price,level);
    
    return price;

}

Insurance.prototype.getyearDifference =  function(year){
    return new Date().getFullYear() - year;
    
}

Insurance.prototype.calculateLevel = function(price, level){
    /**
     * Complete Insurace Is going the increase the value by 38%
     * 
     */

    if(level == "Basic") {
        price = price * 1.30;
    } else {
        price = price *1.50;
    }

    return price;
}




// Object

function HTMLUI(){};

//display 20 year

HTMLUI.prototype.displayYear = function() {
    //Max and min year

    const max = new Date().getFullYear(),
          min = max - 20;
    const selectYear = document.querySelector("#year");

    for(let i= max; i>=min; i--) {

        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
    
}

HTMLUI.prototype.displayError = function(errorMessage){
    //create a div
    const div  = document.createElement("div");
    div.classList = "error";

    //insert a message
    div.innerHTML = `
    ${errorMessage}
    `;
    form.insertBefore(div, document.querySelector('#form').firstElementChild);

    //Remove the error

    setTimeout(() => {

        document.querySelector(".error").remove();
    }, 3000);


}

HTMLUI.prototype.showResult = function(price,insurance) {

    const result = document.querySelector("#result");

    const make = insurance.make;
    const year = insurance.year;
    const level = insurance.level;

    result.style.border = "2px solid lightblue";

    result.innerHTML = `
    <h4 class="Header">Summery</h4>
    <p> Make : ${make}</p><br>
    <p> Year : ${year}</p><br>
    <p> Level : ${level}</p><br>
    <p class="total">Total $ ${price}</p>
    `;



}