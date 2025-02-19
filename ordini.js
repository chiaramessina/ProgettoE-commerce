function showOrderDetails(orderId) {
    const allOrders = document.querySelectorAll('.order-details');
    allOrders.forEach(order => {
        order.style.display = 'none';
    });
    const selectedOrder = document.getElementById(orderId);
    if (selectedOrder) {
        selectedOrder.style.display = 'block';
    }
}
