const $ = document.querySelector.bind(document);

const form = $('#floor-form');
const moneyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function calculateFloor(event) {
  event.preventDefault();

  var width = parseFloat($('#width').value);
  var length = parseFloat($('#length').value);
  var amount = parseInt($('#amount').value);
  var unitPrice = parseFloat($('#type').value);
  var area = width * length;
  var totalArea = area * amount;
  var totalPrice = area * unitPrice * amount;
  writeResult(totalArea, totalPrice);
}

function writeResult(totalArea, totalPrice) {
  $('#floor-amount').innerText = `${totalArea} m²`;
  $('#floor-price').innerText = `${moneyFormatter.format(totalPrice)}`;
}