const purchaseBtn = document.getElementById('btn-purchase');

if (purchaseBtn) {
  purchaseBtn.addEventListener('click', function () {
    const transactionId =
      this.dataset.transactionId || 'T_' + Date.now();

    const purchaseEvent = {
      event: 'purchase',
      ecommerce: {
        transaction_id: transactionId,
        currency: 'EUR',
        value: 29.99,
        tax: 4.99,
        shipping: 0,
        items: [
          {
            item_id: 'sku_12345',
            item_name: 'Test Product',
            price: 29.99,
            quantity: 1
          }
        ]
      }
    };

    window.dataLayer.push(purchaseEvent);

    console.log('purchase pushed', purchaseEvent);
  });
}
