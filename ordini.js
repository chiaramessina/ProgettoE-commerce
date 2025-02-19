function getOrdersByUserId(userId) {
    fetch('http://localhost:8080/orders/' + userId, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nel recupero degli ordini');
        }
        return response.json();
    })
    .then(data => {
        console.log('Ordini utente:', data);
        printOutput(data); // Funzione personalizzata per mostrare i dati a schermo
    })
    .catch(error => {
        console.error('Errore:', error);
        printOutput({ error: error.message });
    });
}

// Esempio di utilizzo
getOrdersByUserId(1); // Sostituisci con un ID utente valido
