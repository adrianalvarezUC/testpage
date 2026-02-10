const addToCartBtn = document.getElementById('btn-add-to-cart');

if (addToCartBtn) {
  addToCartBtn.addEventListener('click', function () {
    const price = Number(this.dataset.productPrice);

    const item = {
      item_id: 'sku_12345',
      item_name: this.dataset.productName,
      item_brand: 'Test Brand',
      item_category: 'Test Category',
      item_variant: 'Default',
      price: price,
      quantity: 1
    };

    // 🔹 GA4 REQUIRED: clear previous ecommerce object
    window.dataLayer.push({
      ecommerce: null
    });

    // 🔹 Push the new GA4 ecommerce event
    window.dataLayer.push({
      event: 'add_to_cart',
      ecommerce: {
        currency: 'EUR',
        value: price,
        items: [item]
      }
    });

    console.log('GA4 add_to_cart pushed', item);
  });
}
