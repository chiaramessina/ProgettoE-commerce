/*function showOrderDetails(orderId) {
    const allOrders = document.querySelectorAll('.order-details');
    allOrders.forEach(order => {
        order.style.display = 'none';
    });
    const selectedOrder = document.getElementById(orderId);
    if (selectedOrder) {
        selectedOrder.style.display = 'block';
    }
}*/
document.addEventListener("DOMContentLoaded", function () {
    // Simulazione di ordini fittizi
    const orders = [
        {
            number: "01234ABC",
            date: "12 Febbraio 2025",
            status: "In elaborazione",
            total: 39.99,
            items: ["Collana in argento", "Orecchini perle"]
        },
        {
            number: "56789XYZ",
            date: "5 Febbraio 2025",
            status: "Spedito",
            total: 59.99,
            items: ["Maglia vintage", "Bracciale artigianale"]
        },
        {
            number: "24680LMN",
            date: "28 Gennaio 2025",
            status: "Consegnato",
            total: 29.99,
            items: ["Stampa artistica", "Portachiavi legno"]
        }
    ];

    let ordersList = document.getElementById("ordersList");

    orders.forEach(order => {
        let orderItem = document.createElement("div");
        orderItem.className = "order-item";

        orderItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p><strong>Ordine:</strong> ${order.number}</p>
                    <p class="text-muted">${order.date}</p>
                </div>
                <div>
                    <span class="order-status text-primary">${order.status}</span>
                    <button class="btn btn-sm btn-outline-primary ms-3" data-bs-toggle="modal" data-bs-target="#orderModal" onclick="showOrderDetails('${order.number}')">
                        Dettagli
                    </button>
                </div>
            </div>
        `;

        ordersList.appendChild(orderItem);
    });

    window.showOrderDetails = function (orderNumber) {
        let order = orders.find(o => o.number === orderNumber);
        if (!order) return;

        document.getElementById("modalOrderNumber").innerText = order.number;
        document.getElementById("modalOrderDate").innerText = order.date;
        document.getElementById("modalOrderStatus").innerText = order.status;
        document.getElementById("modalOrderTotal").innerText = order.total.toFixed(2);

        let itemsList = document.getElementById("modalOrderItems");
        itemsList.innerHTML = "";
        order.items.forEach(item => {
            let li = document.createElement("li");
            li.innerText = item;
            itemsList.appendChild(li);
        });
    };
});
