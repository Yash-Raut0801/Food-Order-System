function bill() {
    var pizza = document.getElementById("pizza").value;
    var burger = document.getElementById("burger").value;
    pizza = pizza || 0;
    burger = burger || 0;
    var total = (pizza * 200) + (burger * 100);
    document.getElementById("result").innerHTML
        = "Total Bill: Rs. " + total;
}
function feedback() {
    alert("Thankyou for valuable feedback!");
    return false;
}
