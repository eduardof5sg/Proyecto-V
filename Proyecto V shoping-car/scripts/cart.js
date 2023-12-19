// cart.js

// const cartProductsContainer = document.getElementById('cart-products-container');
// const totalAmountContainer = document.getElementById('total-amount');

// // Obtener la lista de productos en el carrito desde localStorage
// const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

// // Mostrar productos en el carrito
// function displayCartProducts() {
//   cartProductsContainer.innerHTML = '';
//   let totalAmount = 0;

//   cartProducts.forEach((product, index) => {
//     const productDiv = document.createElement('div');
//     productDiv.classList.add('product');

//     const productImage = document.createElement('img');
//     productImage.src = product.image_link || './nofoto.jpg';
//     productImage.alt = product.name;

//     const productName = document.createElement('h2');
//     productName.textContent = product.name;

//     const productPrice = document.createElement('p');
//     if (typeof product.price !== 'undefined') {
//       productPrice.textContent = `Precio: $${product.price}`;
//       totalAmount += parseFloat(product.price) * (product.units || 1);
//     } else {
//       productPrice.textContent = 'Precio no disponible';
//     }

//     // Mostrar unidades y botones para cada producto
//     const unitCountDisplay = document.createElement('span');
//     unitCountDisplay.textContent = `Unidades: ${product.units || 1}`;

//     const addButton = document.createElement('button');
//     addButton.textContent = 'Añadir';
//     addButton.addEventListener('click', () => {
//       addToCart(product);
//     });

//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Quitar';
//     removeButton.addEventListener('click', () => {
//       removeFromCart(index);
//     });

//     const displayCountButton = document.createElement('button');
//     displayCountButton.textContent = 'Mostrar Cantidad';
//     displayCountButton.addEventListener('click', () => {
//       displaySelectedItemCount();
//     });

//     productDiv.appendChild(productImage);
//     productDiv.appendChild(productName);
//     productDiv.appendChild(productPrice);
//     productDiv.appendChild(unitCountDisplay);
//     productDiv.appendChild(addButton);
//     productDiv.appendChild(removeButton);
//     productDiv.appendChild(displayCountButton);

//     cartProductsContainer.appendChild(productDiv);
//   });

//   totalAmountContainer.textContent = `Total: $${totalAmount.toFixed(2)}`;
// }

// // Función para añadir un artículo al carrito
// function addToCart(product) {
//   const existingProductIndex = cartProducts.findIndex(p => p.name === product.name);

//   if (existingProductIndex !== -1) {
//     // Si el producto ya está en el carrito, incrementar la cantidad
//     cartProducts[existingProductIndex].units = (cartProducts[existingProductIndex].units || 1) + 1;
//   } else {
//     // Si el producto no está en el carrito, agregarlo con cantidad 1
//     product.units = 1;
//     cartProducts.push(product);
//   }

//   localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
//   displayCartProducts();
// }

// // Función para quitar un artículo del carrito
// function removeFromCart(index) {
//   const removedProduct = cartProducts[index];
//   if (removedProduct.units && removedProduct.units > 1) {
//     // Si hay más de una unidad, reducir la cantidad
//     removedProduct.units -= 1;
//   } else {
//     // Si solo hay una unidad, quitar el producto del carrito
//     cartProducts.splice(index, 1);
//   }

//   localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
//   displayCartProducts();
// }

// // Llamada a displayCartProducts
// displayCartProducts();


/////////////////////////////

// cart.js

const cartProductsContainer = document.getElementById('cart-products-container');
const totalAmountContainer = document.getElementById('total-amount');

// Obtener la lista de productos en el carrito desde localStorage
const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

// Mostrar productos en el carrito
function displayCartProducts() {
  cartProductsContainer.innerHTML = '';
  let totalAmount = 0;

  cartProducts.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.image_link || './nofoto.jpg';
    productImage.alt = product.name;

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('p');
    if (typeof product.price !== 'undefined') {
      productPrice.textContent = `Precio: $${product.price}`;
      totalAmount += parseFloat(product.price) * (product.units || 1);
    } else {
      productPrice.textContent = 'Precio no disponible';
    }

    // Mostrar unidades y botones para cada producto
    const unitCountDisplay = document.createElement('span');
    unitCountDisplay.textContent = `Unidades: ${product.units || 1}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Añadir';
    addButton.addEventListener('click', () => {
      addToCart(product);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Quitar';
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(unitCountDisplay);
    productDiv.appendChild(addButton);
    productDiv.appendChild(removeButton);

    cartProductsContainer.appendChild(productDiv);
  });

  totalAmountContainer.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Función para añadir un artículo al carrito
function addToCart(product) {
  const existingProductIndex = cartProducts.findIndex(p => p.name === product.name);

  if (existingProductIndex !== -1) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    cartProducts[existingProductIndex].units = (cartProducts[existingProductIndex].units || 1) + 1;
  } else {
    // Si el producto no está en el carrito, agregarlo con cantidad 1
    product.units = 1;
    cartProducts.push(product);
  }

  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  displayCartProducts();
}

// Función para quitar un artículo del carrito
function removeFromCart(index) {
  const removedProduct = cartProducts[index];
  if (removedProduct.units && removedProduct.units > 1) {
    // Si hay más de una unidad, reducir la cantidad
    removedProduct.units -= 1;
  } else {
    // Si solo hay una unidad, quitar el producto del carrito
    cartProducts.splice(index, 1);
  }

  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  displayCartProducts();
}

// Obtener referencia al botón "Terminar Compra" y al modal
const terminarCompraBtn = document.getElementById('terminarCompraBtn');
const graciasModal = document.getElementById('graciasModal');
const vaciarCarritoBtn = document.getElementById('vaciarCarritoBtn');
const totalCompraModal = document.getElementById('totalCompraModal');


// Asociar evento de clic al botón "Terminar Compra"
terminarCompraBtn.addEventListener('click', () => {
  // Mostrar el modal "Gracias por su compra"
  graciasModal.style.display = 'block';

  // Calcular y mostrar el importe total en el modal
const totalAmount = parseFloat(totalAmountContainer.textContent.replace('Total: $', ''));
totalCompraModal.textContent = `$${totalAmount.toFixed(2)}`;
});





// Asociar evento de clic al botón "Vaciar Carrito y Volver a la Galería"
vaciarCarritoBtn.addEventListener('click', () => {
  // Vaciar el carrito
  localStorage.removeItem('cartProducts');
  // Redirigir a la página de galería
  window.location.href = 'galeria.html';
});



// Llamada a displayCartProducts
displayCartProducts();


