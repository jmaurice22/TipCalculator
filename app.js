function calculateTip() {
    let billamt = document.getElementById("bill").value;
    let tip = document.getElementById("percentage").value;
    let ppl = document.getElementById("numppl").value;

    let total = (billamt * tip) / ppl;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    document.getElementById("total_bill").style.display = "block";
    document.getElementById("tip").innerHTML = total;

    
}


document.getElementById("calculate").onclick = function() {
    calculateTip();
};