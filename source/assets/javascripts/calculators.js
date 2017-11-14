function calculator_1(invoice_amount, discount) {
  return invoice_amount * (discount / 100);
}

function calculator_2(invoice_amount, advance_rate, prime_margin, flat_discount) {
  var amount_advanced = invoice_amount * (advance_rate / 100);
  var prime_plus_margin_by_day = (prime_margin / 100) / 360;
  var prime_plus_margin_by_month = (prime_plus_margin_by_day) * 30;
  var prime_plus_margin_fee = prime_plus_margin_by_month * amount_advanced;
  var flat_fee = invoice_amount * (flat_discount / 100);
  var total_factoring_fee = flat_fee + prime_plus_margin_fee;
  
  return Math.round(total_factoring_fee * 100 + Number.EPSILON) / 100;

}

function calculator_3() {}

// Compute Calculator 1
$("#Calculator1-calculate").on("click", function() {
  var invoice_amount = parseInputNumber("Calculator1-invoice_amount");
  var discount = parseInputNumber("Calculator1-discount");
  var compute = calculator_1(invoice_amount, discount);
  document.getElementById("Calculator1-factoring_fee").value = compute;
})


$("#Calculator1-reset").on("click", function() {
  resetField("Calculator1-invoice_amount");
  resetField("Calculator1-discount");
  resetField("Calculator1-factoring_fee");
})

// Compute Calculator 2
$("#Calculator2-calculate").on("click", function() {
  var invoice_amount = parseInputNumber("Calculator2-invoice_amount");
  var advance_rate = parseInputNumber("Calculator2-advance_rate");
  var prime_margin = parseInputNumber("Calculator2-prime_margin");
  var flat_discount = parseInputNumber("Calculator2-flat_discount");
  var compute = calculator_2(invoice_amount, advance_rate, prime_margin, flat_discount)

  document.getElementById("Calculator2-factoring_fee").value = compute;
})

$("#Calculator2-reset").on("click", function() {
  resetField("Calculator2-invoice_amount");
  resetField("Calculator2-advance_rate");
  resetField("Calculator2-prime_margin");
  resetField("Calculator2-flat_discount");
  resetField("Calculator2-factoring_fee");
})
// Helpers
function parseInputNumber(domElem) {
  return parseFloat(document.getElementById(domElem).value);
}

function resetField(domElem) {
  document.getElementById(domElem).value = "";
}
