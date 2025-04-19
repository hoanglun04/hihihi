let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price.toLocaleString()}đ`;
    cartList.appendChild(li);
  });

  document.getElementById('total').textContent = `Tổng: ${total.toLocaleString()}đ`;
}
