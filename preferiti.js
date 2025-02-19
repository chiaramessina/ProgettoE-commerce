// Funzione per caricare i preferiti dal localStorage
function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoritesList = document.getElementById('favorites-list');
  favoritesList.innerHTML = ''; // Pulisce la lista dei preferiti prima di ricaricarla

  favorites.forEach(favorite => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <th scope="row">
              <div class="d-flex align-items-center">
                  <img src="${favorite.immagine}" class="img-fluid rounded-3" style="width: 120px;" alt="Prodotto">
                  <div class="flex-column ms-4">
                      <p class="mb-2">${favorite.nome}</p>
                  </div>
              </div>
          </th>
          <td class="align-middle">
              <button class="btn btn-primary" onclick="addToCart(${favorite.id})">Aggiungi al carrello</button>
          </td>
          <td class="align-middle">
              <button class="btn btn-danger" onclick="removeFromFavorites(${favorite.id})">Rimuovi dai preferiti</button>
          </td>
      `;
      favoritesList.appendChild(row);
  });
}

// Funzione per aggiungere un prodotto ai preferiti
function addToFavorites(product) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Controlla se il prodotto è già nei preferiti
  if (!favorites.some(fav => fav.id === product.id)) {
      favorites.push(product);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      loadFavorites(); // Ricarica la lista dei preferiti
  }
}

// Funzione per rimuovere un prodotto dai preferiti
function removeFromFavorites(productId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(fav => fav.id !== productId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  loadFavorites(); // Ricarica la lista dei preferiti
}

// Funzione per aggiungere al carrello
/*function addToCart(productId) {
  const product = { 
      id: productId,
      nome: 'Nome del prodotto',
      immagine: 'URL dell\'immagine',
  };

  // Aggiungi il prodotto al carrello
  alert(`Aggiunto al carrello: ${product.nome}`);
}*/

// Funzione per inizializzare i preferiti
document.addEventListener('DOMContentLoaded', function() {
  // Esempio di prodotti
  const exampleProducts = [
      {
          id: 1,
          nome: 'Silicon Power 256GB SSD',
          immagine: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      },
      {
          id: 2,
          nome: 'Giacca in cotone da uomo',
          immagine: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      },
      {
          id: 3,
          nome: 'T-shirt slim fit uomo',
          immagine: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      },
  ];

  // Aggiungi i prodotti all'array dei preferiti 
  exampleProducts.forEach(product => addToFavorites(product));

  // Carica i preferiti
  loadFavorites();
});
// Funzione per aggiungere ai preferiti (puoi fare una chiamata API al backend)
function aggiungiAiPreferiti(prodottoId) {
    // Qui invierai una richiesta al backend per aggiungere il prodotto ai preferiti
    fetch('/aggiungi-preferito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prodottoId })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Prodotto aggiunto ai preferiti', data);
        alert('Prodotto aggiunto ai preferiti!');
    })
    .catch(error => console.error('Errore:', error));}