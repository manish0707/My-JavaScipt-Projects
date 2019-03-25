

// This code is written by Manish Sharma when I was learning about form validation
// in Javascript using ES6 syntax



//Variables 

const submitBtn = document.querySelector("#submitBtn"),
      username = document.querySelector("#username"),
      country = document.querySelector("#selectCountry"),
      mail = document.querySelector("#mail"),
      age = document.querySelector("#age"),
      phone = document.querySelector("#phone"),
      textArea = document.querySelector("#textArea"),
      color = document.getElementsByName("color"),
      language = document.getElementsByName("language"),
      myError = document.querySelector("#error");


//Event Listners

allEventListners();

function allEventListners(){

    submitBtn.addEventListener("click",validateForm);
}


//Functions 

function validateForm(){

    let check = [];
    let print = false;

    // Every function will return its status and depending on status
    // code we will print error message

    check[0] = validateRadio(color,language);
    check[1] = validateInputFields(username);
    check[2] = validateInputFields(age);
    check[3] = validateInputFields(phone);
    check[4] = validateInputFields(textArea);
    check[5] = validateSelect(country);
    check[6] = validateInputFields(mail)
    
    //Checking for errors in validation
    check.forEach( (element,index) =>{
        if(element==false){
            print = true;
        }
    });

    if(print==true){

        //Printing the error
        myError.style.color="red";
        myError.style.display="block";
    }else
    {
        myError.style.display="none";
    }
}


//validates all the input type text in the page

function validateInputFields(field){
    
    if(field.value.length <= 0){

        field.style.borderColor = "red";
        return false;
    }
    else
    {

        //Conditiono to check the valid mail

        field.style.borderColor = "green";

        if(field.id == "mail"){

            if(field.value.indexOf("@") != -1){
    
                mail.style.borderColor = "green";
                return true;
            }
            else
            {
                mail.style.borderColor = "red";
                return false;
            }
        }
    }

}


//Validates the select tag from the page 
function validateSelect(country){

    if(country.value == "Choose"){
        country.style.borderColor ="red";
        return false;
    }else
    {
        country.style.borderColor ="green";
        return true;
    }
    
}


//validates the radio buttons from the page

function validateRadio(color,language){

    let colorFlag = false;
    let languageFlag = false;
    

    if(color[0].type=="radio" && language[0].type=="radio"){

        color.forEach(element => {
            if(element.checked){
                colorFlag = true;
            }
        });
    
        language.forEach(element=>{
            if(element.checked){
                languageFlag = true;
            }
        });
        
        //Changes label color on error

        if(colorFlag==true && languageFlag==true)
        {   
            color[0].parentElement.firstElementChild.style.color="black";
            language[0].parentElement.firstElementChild.style.color="black";
            return true;
        }
        else
        {  
            color[0].parentElement.firstElementChild.style.color="red";
            language[0].parentElement.firstElementChild.style.color="red";
            return false;
        }
    }
    
    
}

