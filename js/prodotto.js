function getQueryParam(param) {
    /* new URLSearchParams(...) crea un nuovo oggetto che facilita la manipolazione dei parametri della query string, 
     rendendo semplice l'accesso ai singoli valori. */
    // 'window.location.search' restituisce tutto ciò che segue il '?' nell'URL (ovvero la QUERYSTRING)
    const params = new URLSearchParams(window.location.search); 
    console.log(params);
    // Utilizza il metodo 'get' dell'oggetto URLSearchParams per ottenere il valore associato al parametro passato
    // Se il parametro non esiste, il metodo restituisce null
    return params.get(param);
}


// Recupera l'id del prodotto dall'URL
const productId = getQueryParam('id');
console.log('ID del prodotto:', productId);

// Effettua la chiamata API per ottenere i dettagli del prodotto

let category = "";

const url = `https://fakestoreapi.com/products/${productId}`;

fetch(url)
  .then(response => response.json())
  .then(product => {
    category +=product.category;

    const img = document.querySelector(".fav-img");
    img.src = product.image;
    document.querySelector(".item-price").textContent = product.price;
    document.querySelector(".item-name").textContent = product.title;
    document.querySelector(".item-description").textContent = product.description;
    getSimilar(category);
  })
  .catch(error => console.error('Errore nel recupero del prodotto:', error));



  const getSimilar = (cat)=>{

    const categoryUrl = `https://fakestoreapi.com/products/category/${cat}?limit=4`
    fetch(categoryUrl)
    .then(res => res.json())
    .then(prods => {
        const products = prods.map(prod => {
            return `
                <div class="card">
                <i class="fas fa-heart heart-icon"></i>
                    <a href="prodotto.html?id=${prod.id}">
                    <img class="immagine" src="${prod.image}" alt="Immagine prodotto">
                    </a>
                    <h3 class="titolo">${prod.title}</h3>
                    <div class="prezzo-container">
                        <p class="prezzo">$${prod.price}</p>
                           <i class="fas fa-shopping-cart cart-icon"></i>
                        <a href="pag di riferimento per prodotto">
                        </a>
                    </div>
                </div>
                `
                }).join('')

               document.querySelector(".promo-container").innerHTML = products;
 });

  }
