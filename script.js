// Greet button
let btn = document.getElementById("greet-btn");
btn.addEventListener("click", function() {
  let name = "Richard";
  alert("Welcome " + name + "! Your journey to Kenya starts here.");
});

// Color button
let colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "#1a1a2e";
});

// Income tracker
let total = 0;

let addBtn = document.getElementById("add-income");

addBtn.addEventListener("click", function() {
  let input = document.getElementById("income-input");
  let amount = parseFloat(input.value);

  if (amount > 0) {
    total = total + amount;

    let list = document.getElementById("income-list");
    let newEntry = document.createElement("p");
    newEntry.innerText = "+ $" + amount;
    list.appendChild(newEntry);

    let totalDisplay = document.getElementById("total-display");
    totalDisplay.innerText = "Total: $" + total;
    if (total > 1000) {
  totalDisplay.style.color = "green";
  totalDisplay.innerText = "Total: $" + total + " 🎉 Over $1,000!";
}


    input.value = "";
  } else {
    alert("Please enter a valid amount.");
  }
});
