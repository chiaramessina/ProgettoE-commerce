function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search); 
    return params.get(param);
}



const productId = getQueryParam('id');
const url = `https://fakestoreapi.com/products/${productId}`;


fetch(url)
  .then(response => response.json())
  .then(product => {
    const img = document.querySelector(".fav-img");
    img.src = product.image;
    document.querySelector(".item-price").textContent = product.price;
    document.querySelector(".item-name").textContent = product.title;
    document.querySelector(".item-description").textContent = product.description;
    document.querySelector(".add-to-cart-btn").setAttribute("data-id", product.id)
    document.querySelector(".add-to-cart-btn").addEventListener("click", (e)=>addToCart(e) )


    getSimilar(product.category);
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
                           <i class="fas fa-shopping-cart cart-icon" data-id = ${prod.id} onclick = "addToCart(e)"></i>
                        <a href="pag di riferimento per prodotto">
                        </a>
                    </div>
                </div>
                `
                }).join('')
               document.querySelector(".promo-container").innerHTML = products;
               document.querySelector(".promo-container").addEventListener("click", (e)=>addToCart(e))
 });

  }

  const addToCart = (e)=>{
    console.log(e.target.classList)

    if(e.target.classList.contains("cart-icon")){
    
        fetch('https://fakestoreapi.com/products/' + e.target.getAttribute("data-id"))
                .then(res=>res.json())
                .then(json=>{
                    if(localStorage.key(json.id)) console.log("present")
                       
                    localStorage.setItem(json.id, JSON.stringify(json))
                    localStorage.setItem(`q-${json.id}`, 1)
                    location.reload();
                })               
                }else return;
    
    }
  
