var budget = 0;
var totBudget = 0;
var expenseArray = [];
var totalExpense = 0;

function setBudget() {
    budget = parseFloat(document.getElementById("budget").value);
    totBudget = budget;
    showTable();
}

function setExpense() {
    var expense = {
        date: document.getElementById("expenseDate").value,
        amount: parseFloat(document.getElementById("expenseAmount").value),
        category: document.getElementById("expenseCategory").value,
        description: document.getElementById("expenseDescription").value,
    }

    expenseArray.push(expense);
    budget = budget - expense.amount;
    totalExpense += expense.amount;

    document.getElementById("expTable").innerHTML += "<tr><td>" + expense.date + "</td><td>" + expense.amount + "</td><td>" + expense.category + "</td><td>" + expense.description + "</td><td><button onclick='deleteExpense(" + (expenseArray.length - 1) + ")'>Delete</button></td></tr>";
    showTable();
}

function deleteExpense(a) {
    var exp = expenseArray[a];
    budget += exp.amount;
    totalExpense -= exp.amount;
    expenseArray.splice(a, 1);

    document.getElementById("expTable").deleteRow(a + 1);
    showTable();
}

function checkBudget() {
    var expAmt = parseFloat(document.getElementById("expenseAmount").value);

    if (expAmt > budget) {
        document.getElementById("errorMessage").style.display = "block"
        document.getElementById("errorMessage").style.color = "Red"
        document.getElementById("errorMessage").innerHTML = "Value Exceeds the Budget Remaining";
    }

    else {
        document.getElementById("errorMessage").style.display = "none"
    }
}

function showTable() {
    if (document.getElementById("budgetList").style.display == "none") {
        document.getElementById("budgetList").style.display = "block";
        
        document.getElementById("budgetRow").innerHTML = "<td>" + totBudget + "</td><td>" + totalExpense + "</td><td>" + budget + "</td>";


    }

    else {
        document.getElementById("budgetList").style.display = "none"
    }
}
