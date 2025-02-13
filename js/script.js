// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }



// fetch('https://fakestoreapi.com/products?limit=10')
//             .then(res=>res.json())
//             .then(prods=>{
//                 const products = prods.map(prod=>{
//                     return `
//                     <div class="card">
//                     <a href="pag di riferimento per prodotto">
//                     <img class="heart" src="Images/icona cuore.png">
//                     </a>
//                     <img src="${prod.image}" alt="Immagine 1">
//                     <h3>${prod.title}</h3>
//                     <div class="prezzo-container">
//                         <p class="prezzo">${prod.price}</p>
//                         <a href="pag di riferimento per prodotto">
//                         <img class="cart" src="Images/icona carrello.png" alt="Carrello"> 
//                         </a>
//                      </div>
//                     </div>
//                 `
//                 }).join('')

//                 document.querySelector(".container").innerHTML = products;
// });
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(prodsResults => {   //per ogni prods
        const prodottiDaVisualizzare = prodsResults.slice(0,4); 
       

        const cardProducts = prodottiDaVisualizzare.map(prod => {
            return `
                <div class="card">
                <i class="fas fa-heart heart-icon"></i>
                    <a href="pag di riferimento per prodotto">
                    </a>
                    <img class="immagine" src="${prod.image}" alt="Immagine prodotto">
                    <h3 class="titolo">${prod.title}</h3>
                    <div class="prezzo-container">
                        <p class="prezzo">
                            <span class="prezzo-originale">$${prod.price}</span>
                            <span class="prezzo-scontato">$${(prod.price * 0.8).toFixed(2)}</span> 
                        </p>
                        <i class="fas fa-shopping-cart cart-icon"></i>
                        <a href="pag di riferimento per prodotto">
                        </a>
                    </div>
                </div>
                `
                }).join('')

               document.querySelector(".container-promozioni").innerHTML = cardProducts;
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
                    <a href="pag di riferimento per prodotto">
                    </a>
                    <img class="immagine" src="${prod.image}" alt="Immagine prodotto">
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

               document.querySelector(".container-disponibili").innerHTML = products;
 });
