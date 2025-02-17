let total = 0;


const getCartItem = ()=>{

    let cartItems = "";

    for (let key in localStorage) {
        if(key.charAt(0)=="q") console.log("hi");
          else{
        const item = JSON.parse(localStorage.getItem(key))
        if(item===null) return
       else{
        const element = document.createElement('tr');
        element.classList.add(`element-${item.id}`)
        element.innerHTML = `
        <th scope="row">
                                <div class="d-flex align-items-center">
                                  <img src="${item.image}" class="img-fluid rounded-3"
                                    style="width: 120px;" alt="${item.title}">
                                  <div class="flex-column ms-4">
                                    <p class="mb-2">${item.title}</p>
                                    
                                  </div>
                                </div>
                              </th>
                              <td class="align-middle">
                                <p class="mb-0" style="font-weight: 500;">Digital</p>
                              </td>
                              <td class="align-middle">
                                <div class="d-flex flex-row">
                                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="quantityDown(${item.id})">
                                    <i class="fas fa-minus"></i>
                                  </button>
              
                                  <input id="form1" min="0" name="quantity" value="1" type="number"
                                    class="form-control form-control-sm" style="width: 50px;" data-input-id = ${item.id} />
              
                                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="quantityUp(${item.id})">
                                    <i class="fas fa-plus"></i>
                                  </button>
                                </div>
                              </td>
                              <td class="align-middle">
                                <p class="mb-0" style="font-weight: 500;">$${item.price}</p>
                              </td>`

       document.querySelector("#cart-elements").appendChild(element)
    }
  }
    }
    document.querySelector("#cart-elements").innerHTML = cartItems;

    return cartItems;
    

}


const updateQuantValues = ()=>{
  for (let key in localStorage){

    if(!isNaN(parseInt(key))) {
      document.querySelector(`[data-input-id="${key}"]`).value = parseInt(localStorage.getItem(`q-${key}`))
    }

  }
}

const quantityUp = (id)=>{
  localStorage.setItem(`q-${id}`, parseInt(localStorage.getItem(`q-${id}`))+1)
  document.querySelector(`[data-input-id="${id}"]`).value = localStorage.getItem(`q-${id}`)
  getTotalPrice();
  updateQuantValues();
}


const quantityDown = (id)=>{
  if(localStorage.getItem(`q-${id}`)==0) {
    localStorage.removeItem(id)
    localStorage.removeItem(`q-${id}`)
    document.querySelector(`.element-${id}`).remove()
    document.querySelector(`.element-${id}`).style.display = "none";
    getCartItem();
  }
  localStorage.setItem(`q-${id}`, parseInt(localStorage.getItem(`q-${id}`))-1)
  document.querySelector(`[data-input-id="${id}"]`).value = localStorage.getItem(`q-${id}`)
  getTotalPrice();
  updateQuantValues();
}

const getTotalPrice = ()=>{
  total = 0;
  for (let key in localStorage){
    if(!isNaN(parseInt(key))) {
      total+= JSON.parse(localStorage.getItem(key)).price *localStorage.getItem(`q-${key}`)
      console.log(total)}
      
  }
      const subtotal = document.querySelector(".subtotal-cart").textContent = parseFloat(total).toFixed(2)
      const totalCart = document.querySelector(".total-cart").textContent = parseFloat(subtotal+2.99).toFixed(2);

      document.querySelector(".checkout-btn").textContent = parseFloat(totalCart).toFixed(2);
}

getCartItem();
updateQuantValues();

getTotalPrice();
