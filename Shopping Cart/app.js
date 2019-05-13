// variables
let card = document.querySelectorAll(".card");
let imageSrc,courseName;
let counter = 0;
let counterElement = document.querySelector("#counter");
let PayableAmountElement = document.querySelector("#PayableAmount");
let removeBtn = document.querySelector("#cart-items");
let EmptyMessage = document.querySelector("#emptyMessage");
let themeButton = document.querySelector("#themeBtn");





//Event Listners
myEventListners();

function myEventListners(){

    themeButton.style.backgroundColor = "white";

    card.forEach(element=>{
        element.addEventListener("click", myfunction );
    });

    removeBtn.addEventListener("click",removeCourseFromCart);

    themeButton.addEventListener("click",changeTheme);
}


//Function

function myfunction(Event){

    let clickedElement = Event.target;
    
    if(clickedElement.classList.contains("add-to-cart")){



        /* Here I am taking the course name and img src to show in the cartbox */
        imageSrc  = clickedElement.parentElement.parentElement.firstElementChild.getAttribute("src");
        courseName = clickedElement.parentElement.firstElementChild.textContent;


        clickedElement.style.backgroundColor = "green";
        clickedElement.value="Added To Cart";
        


        setTimeout(() => {
        clickedElement.removeAttribute("style");
        clickedElement.value="Add To Cart";
        }, 500);

    

            addElementToTheCart(imageSrc,courseName); //Function to add element in the cart

        /* Showing the course count on the page */
        counter++;
        counterElement.innerHTML = counter;

        amountShower();
    }
    
}

function addElementToTheCart(myImageSrc,myCourseName){

        /* Creating a new cart item */
        let course = document.createElement("div");
        course.innerHTML = `
        <div class="row">
        <div class="five columns">
                        <img src="${myImageSrc}" alt="" class="u-full-width" style="border-radius:20px">
        </div>

        <div class="six columns">
                        ${myCourseName}

        </div>
        <div class="one column">
                        <span><a href="#" class="removeBtn" >X</a> </span>
                </div>
        </div>
        `;


        /* Hiding the YOur cart is empty message from the DOM */
        EmptyMessage.style.display="none";

        /* Adding the selected course to the cart  */
        document.querySelector("#cart-items").appendChild(course);

}


function removeCourseFromCart(Event){

    Event.preventDefault();

    /* Used Delegation to get remove button */
    let clickedElement = Event.target;
    if(clickedElement.classList.contains("removeBtn")){


        /* Decreased the counter value once deleted the course */
        counter = counter - 1;
        counterElement.innerHTML = counter;


        /* Removing the cart item from the  DOM */
        clickedElement.parentElement.parentElement.parentElement.remove();

        /* If the cart is empty reflecting the cart is empty message */
        if(counter==0){
            EmptyMessage.style.display = "block";
        }
        
    }

    // Calling the amountShower Function
    amountShower();
    
}


// Function That Changes the Theme of the App

function changeTheme(){

    if(themeButton.textContent === "Light Theme"){

        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
        themeButton.textContent = "Dark Theme";
        themeButton.style.backgroundColor = "black";
        themeButton.style.color = "white";

    } else if(themeButton.textContent==="Dark Theme"){

        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
        themeButton.textContent = "Light Theme";
        themeButton.style.backgroundColor = "white";
        themeButton.style.color="black";
    }
}


//Function to show Amount on the DOM
function amountShower(){

    PayableAmountElement.textContent = `${(counter * 20)} $`;
}
