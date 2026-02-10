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
    value: 29.99,
    items: [
      {
        item_id: 'sku_12345',
        item_name: 'Test Product',
        item_brand: 'Test Brand',
        item_category: 'Test Category',
        item_variant: 'Default',
        price: 29.99,
        quantity: 1
      }
    ]
  }
});


    console.log('add_to_cart pushed', product);
  });
}
