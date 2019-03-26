document.querySelector("#generate-name").addEventListener("submit", loadNames);



function loadNames(event) {
    event.preventDefault();

    //Read the values and create variables 
    const origin = document.getElementById("country").value;
    const gender = document.getElementById("gender").value;
    const quantity = document.getElementById("quantity").value;
    
    //Building the URL

    let url = `https://uinames.com/api/?`;
    //Read the origin and append to the url

    if(origin !== "") {
        url += `region=${origin}&`;  
    }

    //Read the gender and append the url

    if(gender !== "") {
        url += `gender=${gender}&`;
    }
    
    //Read the Amount and append the url

    if(gender !== "") {
        url += `amount=${quantity}`;
    }

    //Ajax call

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {
        if(this.status == 200) {

            const names = JSON.parse(this.responseText );

            //Insert data to the DOM
            document.getElementById("generatedNamesHeading").style.display = "block";

            const ul = document.querySelector(".result");
            ul.style.border = "2px solid black";
            ul.style.backgroundColor = "lightblue";

            //Inserting list to the DOM
            names.forEach(function(childName){
                const li = document.createElement("li");
                li.classList = "list";
                li.textContent = childName.name;
                document.querySelector(".result").appendChild(li);
            });
        }
    }
    
    xhr.send();
    
}