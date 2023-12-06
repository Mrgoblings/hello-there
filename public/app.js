function updateTotal() {
    var selectedType = document.getElementById('cookie-select').value;
    
    // Get quantity of selected type of cookies
    var quantity = parseInt(document.getElementById('cookie-quantity').value, 10);

    // Calculate total price
    var price = (selectedType === 'chocolate') ? 2.00 : 1.50;
    var total = quantity * price;

    // Update cookie details
    document.getElementById('cookie-title').innerText = selectedType === 'chocolate' ? 'Chocolate Cookie' : 'Non-Chocolate Cookie';
    document.getElementById('cookie-price').innerText = '$' + price.toFixed(2);

    // Update quantity display
    document.getElementById(selectedType + '-quantity-display').innerText = selectedType.charAt(0).toUpperCase() + selectedType.slice(1) + ' Cookies: ' + quantity;

    // Update total display
    document.getElementById('total-display').innerText = 'Total: $' + total.toFixed(2);
}
