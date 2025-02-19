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
    const ordersContainer = document.getElementById("orders-list");
    const token = localStorage.getItem("token"); // Assumo che usi JWT
    if (!token) {
        window.location.href = "login.html"; // Reindirizza al login se non autenticato
        return;
    }

    fetchOrders();

    function fetchOrders() {
        fetch("http://localhost:8080/orders/user", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Errore nel recupero degli ordini.");
            }
            return response.json();
        })
        .then(orders => {
            displayOrders(orders);
        })
        .catch(error => {
            console.error("Errore:", error);
            ordersContainer.innerHTML = "<p>Errore nel caricamento degli ordini.</p>";
        });
    }

    function displayOrders(orders) {
        if (orders.length === 0) {
            ordersContainer.innerHTML = "<p>Nessun ordine trovato.</p>";
            return;
        }

        ordersContainer.innerHTML = orders.map(order => `
            <div class="order">
                <p><strong>Ordine #${order.id}</strong></p>
                <p>Data: ${new Date(order.orderDate).toLocaleDateString()}</p>
                <p>Totale: €${order.total.toFixed(2)}</p>
            </div>
        `).join("");
    }
});
