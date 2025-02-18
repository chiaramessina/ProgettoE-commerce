// Funzione per effettuare il login
function login(username, password) {
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login fallito');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login effettuato:', data);
        printOutput(data);
        // Salva il token nel localStorage
        if(data.token) {
          localStorage.setItem("authToken", data.token);
          // Mostra il pulsante Logout e nasconde il form di login
          document.getElementById("logoutButton").style.display = "block";
          document.getElementById("loginForm").style.display = "none";
        }
    })
    .catch(error => {
        console.error('Errore nel login:', error);
        printOutput({ error: error.message });
    });
  }
