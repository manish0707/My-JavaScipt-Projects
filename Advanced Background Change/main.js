

// function calling to correct button click
document.querySelector("body").addEventListener("click", function(event){
    if(event.target.id == "red"){
        changesBackground("red");
        changeMessage("Its Red Now!","red");
    } else if(event.target.id=="green"){
        changesBackground("green");
        changeMessage("Its Green Now!","green");
    } else if(event.target.id=="blue"){
        changesBackground("blue");
        changeMessage("Its Blue Now!","blue");
    } else if(event.target.id=="black"){
        changesBackground("black");
        changeMessage("Its Black Now!","grey");
    }
});


// function to change background color 
function changesBackground(color){
    document.querySelector("body").setAttribute("style",`background-color:${color};transition:1.5s;`)
}


// function to change message on click 
function changeMessage(message,color){
    document.getElementById("message").setAttribute("style",`background-color:${color}; display:block`);
    setTimeout(()=>{
        document.getElementById("message").style.display="none";
    },1500);

    document.getElementById("message").textContent = message;
}
