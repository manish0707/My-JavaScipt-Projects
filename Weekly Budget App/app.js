//Classes

class Budget {
    constructor(userBudget){
        this.userBudget = Number(userBudget);
        this.budgetLeft  = this.userBudget;
    }
    substractFromBudget(amount){
        this.budgetLeft = (this.budgetLeft - amount);
        return this.budgetLeft;
    }
}

class HTML {

    addBudgetToDom(userBudget){

        //Adds budget to the dom

        budgetElement.textContent = userBudget;
        budgetleftElement.textContent = userBudget;
    }

    printMessage(message,color="red") {

        //Prints the status message on screen like added, fill the form etc.

        let messageElement = document.querySelector("#message");
        let form = document.querySelector("form");
        messageElement.textContent = message;
        messageElement.style.backgroundColor = color;
        messageElement.style.display = "block";

        setTimeout(() => {
            messageElement.style.display = "none";
            form.reset();
        }, 3000);
        
    }

    addExpenseToList(name, amount) {
        const expenseList = document.querySelector("#expenses");
        let list = document.createElement("li");
        list.innerHTML = ` ${name} <span class="u-pull-right"> $ ${amount}</span>`;
        expenseList.appendChild(list);
    }
    trackBudget(amount){

        //Tacks the  budget and updates into budget left element

        const budgetRemain =  Number(budget.substractFromBudget(amount));
        budgetleftElement.textContent = budgetRemain;

        if(budgetRemain < (userBudget/2) && budgetRemain > (userBudget/3)) {

            budgetleftElement.textContent = budgetRemain;
            budgetleftElement.parentElement.style.backgroundColor = "orange";

        } else if(budgetRemain < (userBudget/3)) {

            budgetleftElement.textContent = budgetRemain;
            budgetleftElement.parentElement.style.backgroundColor = "red";

            if(budgetRemain<0){
                this.printMessage("You Consumed All the budget!");
            }
        }
        
        
    }

}



//Objects
const addBtn = document.querySelector("#addBtn");
let budgetElement = document.getElementById("total-budget");
let budgetleftElement = document.getElementById("left");
let budget , userBudget;

html = new HTML();






//Event listners
eventListners();
function eventListners(){
    document.addEventListener("DOMContentLoaded", function(){
        userBudget = prompt("Enter Your budget for this week");

        //Validating the budget
        if(userBudget === null || userBudget === "" || userBudget === "0") {
            window.location.reload();

        } else {
        //Budget is Correct

            budget = new Budget(userBudget);

            //Add userBudget to the DOM

            html.addBudgetToDom(userBudget);

             
        }
        
    });

    addBtn.addEventListener("click", function(event){
        event.preventDefault();
        //Read the value from the form
        const expenseName = document.querySelector("#expenseName").value;
        const expenseAmount = document.querySelector("#expenseAmount").value;

        if(expenseAmount === "" || expenseName === "") {
            html.printMessage("Please Fill The form");
        } else {
            html.addExpenseToList(expenseName, expenseAmount);
            html.printMessage("Added...","green");
            html.trackBudget(expenseAmount);
        }
    });
}