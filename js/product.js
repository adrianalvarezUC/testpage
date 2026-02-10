const addToCartBtn = document.getElementById('btn-add-to-cart');

if (addToCartBtn) {
  addToCartBtn.addEventListener('click', function () {
    const price = Number(this.dataset.productPrice);

    const product = {
      item_id: 'sku_12345',
      item_name: this.dataset.productName,
      price: price,
      quantity: 1
    };

    window.dataLayer.push({
      event: 'add_to_cart',
      ecommerce: {
        currency: 'EUR',
        value: price,
        items: [product]
      }
    });

    console.log('add_to_cart pushed', product);
  });
}
