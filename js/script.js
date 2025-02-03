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
//                  <div class="card">
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