
fetch('https://fakestoreapi.com/products')
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
                           <i class="fas fa-shopping-cart cart-icon" data-id = ${prod.id}></i>
                        <a href="pag di riferimento per prodotto">
                        </a>
                    </div>
                </div>
                `
                }).join('')

               const cardContainer = document.querySelector(".containerTutti").innerHTML = products;
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
