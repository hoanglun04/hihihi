let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price.toLocaleString()}đ 
      <button class="remove-btn" onclick="removeFromCart(${index})">X</button>`;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = `Tổng: ${total.toLocaleString()}đ`;
}
