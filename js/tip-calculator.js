function calcTip() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tip = parseFloat(document.getElementById("tip").value);
    const afterTip = (subtotal + ((tip / 100) * subtotal));
    const total = document.getElementById("total");
    total.innerHTML = "$" + afterTip;
}
