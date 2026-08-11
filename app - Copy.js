const callButton = document.getElementById("callButton");
const clearButton = document.getElementById("clearButton");
const status = document.getElementById("status");

callButton.addEventListener("click", function () {
    document.body.classList.add("calling");

    status.textContent = "🔴 SOMEONE IS CALLING!";
});

clearButton.addEventListener("click", function () {
    document.body.classList.remove("calling");

    status.textContent = "Ready";
});