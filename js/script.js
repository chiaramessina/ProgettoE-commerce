fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(prodsResults => {   //per ogni prods
        const prodottiDaVisualizzare = prodsResults.slice(0,4); 
        const cardProducts = prodottiDaVisualizzare.map(prod => {
            return `
                <div class="card">
                <i class="fas fa-heart heart-icon"></i>
                     <a href="prodotto.html?id=${prod.id}">
                    <img class="immagine" src="${prod.image}" alt="Immagine prodotto">
                    </a>
                    <h3 class="titolo">${prod.title}</h3>
                    <div class="prezzo-container">
                        <p class="prezzo">
                            <span class="prezzo-originale">$${(prod.price * 1.2).toFixed(2)}</span>
                            <span class="prezzo-scontato">$${prod.price}</span> 
                        </p>
                        <i class="fas fa-shopping-cart cart-icon" data-id = ${prod.id}></i>
                        <a href="pag di riferimento per prodotto">
                        </a>
                    </div>
                </div>
                `
                }).join('')

               document.querySelector(".container-promozioni").innerHTML = cardProducts;
               document.querySelector(".container-promozioni").addEventListener("click", (e)=>addToCart(e))
    });
//.toFixed(2) serve per fare in modo che il numero che appare sia composto da 2 cifre dopo la virgola
//prod.price * 0.8 mostra 80% prezzo prodotto originale

 fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(prods => {
        const randomProducts = prods.sort(() => Math.random() - 0.5).slice(0, 4);

        const products = randomProducts.map(prod => {
            return `
                <div class="card">
                <i class="fas fa-heart heart-icon"></i>
                     <a href="prodotto.html?id=${prod.id}">
                    <img class="immagine" src="${prod.image}" alt="Immagine prodotto">
                    </a>
                    <h3 class="titolo">${prod.title}</h3>
                    <div class="prezzo-container">
                        <p class="prezzo">$${prod.price}</p>
                           <i class="fas fa-shopping-cart cart-icon" data-id = ${prod.id}></i>
                        <a href="pag di riferimento per prodotto">
                        </a>
                    </div>
                </div>
                `
                }).join('')

               document.querySelector(".container-disponibili").innerHTML = products;
               document.querySelector(".container-promozioni").addEventListener("click", (e)=>addToCart(e))
               document.querySelector(".container-disponibili").addEventListener("click", (e)=>addToCart(e))
 });

 const addToCart = (e)=>{


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

    const toggleShow = ()=>{
        const toggler = document.querySelector(".dropdown-toggle");
        toggler.getAttribute("aria-expanded") == "true"? toggler.setAttribute("aria-expanded", "false"): toggler.setAttribute("aria-expanded", "true")
        const dropdownMenu = document.querySelector(".dropdown-menu");
        dropdownMenu.classList.toggle("show")
        dropdownMenu.getAttribute("data-bs-popper") ? dropdownMenu.setAttribute("data-bs-popper", "none"): dropdownMenu.removeAttribute("data-bs-popper")
      }
      document.querySelector(".dropdown").addEventListener("click", toggleShow)



