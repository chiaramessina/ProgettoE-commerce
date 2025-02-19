// Funzione per caricare i preferiti dal localStorage
/*function loadFavorites() {
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
function addToCart(productId) {
  const product = { // Esempio di oggetto prodotto (dovresti ottenerlo da un array di prodotti reali)
      id: productId,
      nome: 'Nome del prodotto',
      immagine: 'URL dell\'immagine',
  };

  // Aggiungi il prodotto al carrello
  alert(`Aggiunto al carrello: ${product.nome}`);
}

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
});*/
/*<body>
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <i class="fas fa-heart"></i>
                </button>
            
                <div class="offcanvas offcanvas-end" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">Preferiti</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <section class="h-100 h-custom">
                            <div class="container h-100 py-5">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" class="h5">Articolo</th>
                                                        <th scope="col">Aggiungi al carrello</th>
                                                        <th scope="col">Rimuovi</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="favorites-list">-->
                                                    <!-- I preferiti verranno aggiunti  qui -->
                                              <!--</tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>-->
            
                <!-- Bootstrap JS 
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            
             Collegamento al tuo file JavaScript preferiti.js 
                <script src="preferiti.js"></script>
            </body>
            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </div>  
            </div>*/
    