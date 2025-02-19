function printOutput(data) {
    console.log(JSON.stringify(data, null, 2))
    // const output = document.getElementById("output");
    // output.textContent = JSON.stringify(data, null, 2);
  }


const checkLogin = ()=>{
    const token = localStorage.getItem("authToken");

    fetch('http://localhost:8080/api/users/checkLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? 'Bearer ' + token  : null
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            console.log(response)
            document.getElementById("logged-icons").setAttribute('style', 'display: none !important');
            document.getElementById("non-logged-icons").setAttribute('style', 'display: flex !important');
            throw new Error('Login fallito');
        }
        return response.json();
    })
    .then(data => {
        console.log('Login effettuato:', data);
        // console.log(data)
        // Salva il token nel localStorage
        if(data.token) {
          updateProfileData(data);
          localStorage.setItem("authToken", data.token);
          // Mostra il pulsante Logout e nasconde il form di login
          document.getElementById("logoutButton").style.display = "block";
          document.getElementById("loginForm").style.display = "none";
          document.getElementById("logged-icons").setAttribute('style', 'display: flex !important');
          document.getElementById("non-logged-icons").setAttribute('style', 'display: none !important');
        }
    })
    .catch(error => {
        console.error('Errore nel login:', error);
        printOutput({ error: error.message });
    });

    // console.log(token);
}  

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
        updateProfileData(data);
        // Salva il token nel localStorage
        if(data.token) {
          localStorage.setItem("authToken", data.token);
          // Mostra il pulsante Logout e nasconde il form di login
          document.getElementById("logoutButton").style.display = "block";
          document.getElementById("loginForm").style.display = "none";
         document.getElementById("logged-icons").setAttribute('style', 'display: flex !important');
         document.getElementById("non-logged-icons").setAttribute('style', 'display: none !important');
        }
    })
    .catch(error => {
        console.error('Errore nel login:', error);
        printOutput({ error: error.message });
    });
  }

  // Funzione per aggiungere l'header Authorization alle richieste protette
  function getAuthHeaders() {
    const token = localStorage.getItem("authToken");
    return token ? { 'Authorization': 'Bearer ' + token } : {};
  }

  // Funzione per ottenere i nomi degli utenti (endpoint pubblico)
//   function fetchUserNames() {
//     fetch('http://localhost:8080/api/users/names', {
//         headers: getAuthHeaders() // Non strettamente necessario per endpoint pubblico, ma aggiunto per uniformità
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Nomi degli utenti:', data);
//         printOutput(data);
//     })
//     .catch(error => {
//         console.error('Errore nel recupero dei nomi:', error);
//         printOutput({ error: error.message });
//     });
//   }

  // Funzione per ottenere i dettagli di un utente (endpoint privato)
//   function fetchUserDetails(userId) {
//     fetch('http://localhost:8080/api/users/' + userId, {
//         headers: getAuthHeaders()
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Non autorizzato o utente non trovato');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Dettagli utente:', data);
//         printOutput(data);
//     })
//     .catch(error => {
//         console.error('Errore nel recupero dei dettagli:', error);
//         printOutput({ error: error.message });
//     });
//   }

  // Funzione per ottenere le email di tutti gli utenti (endpoint privato)
//   function fetchUserEmails() {
//     fetch('http://localhost:8080/api/users/emails', {
//         headers: getAuthHeaders()
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Non autorizzato');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Email degli utenti:', data);
//         printOutput(data);
//     })
//     .catch(error => {
//         console.error('Errore nel recupero delle email:', error);
//         printOutput({ error: error.message });
//     });
//   }

  // Funzione per ottenere la lista completa degli utenti (endpoint privato)
//   function fetchFullUserList() {
//     fetch('http://localhost:8080/api/users/full', {
//         headers: getAuthHeaders()
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Non autorizzato');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Lista completa utenti:', data);
//         printOutput(data);
//     })
//     .catch(error => {
//         console.error('Errore nel recupero della lista completa:', error);
//         printOutput({ error: error.message });
//     });
//   }

//      // Gestione del pulsante di logout
  document.getElementById('logoutButton').addEventListener('click', function() {
    logout();
  });

  document.getElementById('logoutBtn').addEventListener('click', function() {
    logout();
  });


  // Funzione per aggiungere un nuovo utente (endpoint riservato all'admin)
  function addUser(newUser) {
    fetch('http://localhost:8080/api/users/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Non autorizzato o errore durante l\'aggiunta dell\'utente');
        }
        return response.json();
    })
    .then(data => {
        console.log('Risposta addUser:', data);
        printOutput(data);
    })
    .catch(error => {
        console.error('Errore nell\'aggiunta dell\'utente:', error);
        printOutput({ error: error.message });
    });
  }

  // Gestione del form di login
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
  });

  // Gestione del form per aggiungere un nuovo utente (solo admin)
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUser = {
      username: document.getElementById('register-username').value,
      password: document.getElementById('register-password').value,
      name: document.getElementById('register-firstname').value,
      email: document.getElementById('register-email').value,
      surname: document.getElementById('register-lastname').value
    };
    addUser(newUser);
  });

// Funzione per effettuare il logout
  function logout() {
    // Recupera il token dal localStorage
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("Nessun token trovato nel localStorage");
      return;
    }
    
    fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Logout fallito');
        }
        return response.json();
    })
    .then(data => {
        console.log('Logout effettuato:', data);
        printOutput(data);
        // Rimuove il token dal localStorage
        localStorage.removeItem("authToken");
        // Nasconde il pulsante Logout e mostra il form di login
        document.getElementById("logoutButton").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("logged-icons").setAttribute('style', 'display: none !important');
        document.getElementById("non-logged-icons").setAttribute('style', 'display: flex !important');
    })
    .catch(error => {
        console.error('Errore durante il logout:', error);
        printOutput({ error: error.message });
    });
  }

  const toggleCart = ()=>{
    const toggler = document.querySelector(".offcanvas");
    toggler.classList.toggle("show")
    toggler.getAttribute("aria-modal") ? toggler.setAttribute("aria-modal", "true"): toggler.removeAttribute("aria-modal")
    toggler.getAttribute("role") ? toggler.setAttribute("role", "dialog"): toggler.removeAttribute("role")
  }
  document.querySelector(".fa-shopping-cart").addEventListener("click", toggleCart)
  document.querySelector(".btn-close").addEventListener("click", toggleCart)



  const updateProfileData = (data)=>{
    const profileUsername = document.querySelector("#profile-username");
    const profileName = document.querySelector("#profile-name");
    const profileEmail = document.querySelector("#profile-email");

    profileUsername ? profileUsername.textContent = "@"+ data.username: null;
    profileName ? profileName.textContent = "Nome: "+ data.nome + " " +data.cognome: null;
    profileEmail ? profileEmail.textContent = "Email: "+ data.email: null;
  }


  window.addEventListener("DOMContentLoaded", checkLogin)