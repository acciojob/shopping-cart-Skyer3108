//your code here
document.getElementById('add').addEventListener('click', function() {
  const itemNameInput = document.getElementById('item-name-input');
  const itemPriceInput = document.getElementById('item-price-input');
  
  const itemName = itemNameInput.value.trim();
  const itemPrice = parseFloat(itemPriceInput.value);
  
  if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
    const tableBody = document.getElementById('list-body');
    const newRow = tableBody.insertRow();
    const itemNameCell = newRow.insertCell();
    const itemPriceCell = newRow.insertCell();
    
    itemNameCell.textContent = itemName;
    itemPriceCell.textContent = '$' + itemPrice.toFixed(2);
    
    itemNameInput.value = '';
    itemPriceInput.value = '';
    
    updateGrandTotal();
  } else {
    alert('Please enter valid item name and price.');
  }
});

function updateGrandTotal() {
  const itemPrices = document.querySelectorAll('#list-body td:nth-child(2)');
  let grandTotal = 0;
  
  itemPrices.forEach(function(itemPrice) {
    grandTotal += parseFloat(itemPrice.textContent.slice(1));
  });
  
  document.getElementById('total').textContent = 'Grand Total: $' + grandTotal.toFixed(2);
}