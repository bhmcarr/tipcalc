go_button.onclick = function calcTip(){
  var bill_input = document.getElementById('bill_input').value;
  if (!bill_input){
    alert("Please enter the bill amount first.");
    return;
  }
  bill_input = parseFloat(bill_input);

  var radio_input;
  if (document.getElementById('p20').checked) {
    radio_input = 0.20;
  } else if (document.getElementById('p18').checked) {
    radio_input = 0.18;
  } else if (document.getElementById('p15').checked) {
    radio_input = 0.15;
  } else {
    alert("Please make a percentage selection first.");
    return;
  }

  var tip_amount = bill_input * radio_input;
  tip_amount = parseFloat(tip_amount.toFixed(2));

  var total_amount = tip_amount + bill_input;
  total_amount = total_amount.toFixed(2);

  tip_amount = "$" + tip_amount;
  total_amount = "$" + total_amount;
  document.getElementById("output").innerHTML = tip_amount;
  document.getElementById("output2").innerHTML = total_amount;
  return 0;
}
