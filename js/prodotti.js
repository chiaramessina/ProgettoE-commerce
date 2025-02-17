fetch('https://fakestoreapi.com/products') 
    .then(res => res.json())
    .then(prods => {
        const prodottiScontati = prods.slice(0, 4);

        // Gli altri prodotti senza sconto
        const prodottiNonScontati = prods.slice(4);  //vengono mostrati gli altri prodotti partendo dall'indice 4 (quindi esclusi quelli in promozione)
        const cardScontati = prodottiScontati.map(prod => {  
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
                        <a href="pag di riferimento per prodotto"></a>
                    </div>
                </div>
            `;
        }).join('');

        const cardNonScontati = prodottiNonScontati.map(prod => {
            return `
                <div class="card">
                <i class="fas fa-heart heart-icon"></i>
                    <a href="prodotto.html?id=${prod.id}">
                    <i class="fas fa-heart heart-icon"></i>
                     <a href="prodotto.html?id=${prod.id}">
                    <img class="immagine" src="${prod.image}" alt="Immagine prodotto">
                    </a>
                    
                    <h3 class="titolo">${prod.title}</h3>
                    <div class="prezzo-container">
                        <p class="prezzo">$${prod.price}</p>
                        <i class="fas fa-shopping-cart cart-icon"></i>
                        <a href="pag di riferimento per prodotto"></a>
                           <i class="fas fa-shopping-cart cart-icon" data-id = ${prod.id}></i>
                        <a href="pag di riferimento per prodotto">
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        // per fare in modo che compaiano sia le card degli scontati, sia quelle non scontate
        document.querySelector(".containerTutti").innerHTML = cardScontati + cardNonScontati;
        document.querySelector(".containerTutti").addEventListener("click", (e)=>addToCart(e))
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
