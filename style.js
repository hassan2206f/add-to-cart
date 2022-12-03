let carticon = document.querySelector('#click')
let cart = document.querySelector('#page')
let cross = document.querySelector('#cross')

carticon.onclick = () => {
    cart.classList.add("active");
};
cross.onclick = () => {
    cart.classList.remove("active");
};


if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready);

} else {
    ready();
}

function ready() {
    var removecart = document.getElementsByClassName("delete")
    console.log(removecart)
    for (var i = 0; i < removecart.length; i++) {
        var button = removecart[i]
        button.addEventListener("click", cartremove)
    }
    let quantityinput = document.getElementsByClassName("quantity")
    for (var i = 0; i < quantityinput.length; i++) {
        var input = quantityinput[i]
        input.addEventListener("change", quantitychanged);
    }
    var add = document.getElementById('cart')
    for (var i = 0; i < add.length; i++) {
        var button = add[i]
        button.addEventListener('click', addclick)
    }

}



function cartremove(event) {
    var buttonclick = event.target;
    buttonclick.parentElement.remove();
    update();
}

function addclick(event) {
    var button = event.target
    var shopproduct = button.parentElement;
    var title = shopproduct.getElementsByClassName('product-title')[0].innerText;
    var price = shopproduct.getElementsByClassName('product-price')[0].innerText;
    console.log(title)
}

function quantitychanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}

function update() {
    let cartcontent = document.getElementsByClassName("cart-content")[0]
    let cartbox = document.getElementsByClassName('cart-box')
    for (var i = 0; i < cartbox; i++) {
        let cartboxes = cartbox[i]
        let price = cartboxes.getElementsByClassName("cart-price")[0]
        let quantity = cartboxes.getElementsByClassName("quantity")[0]
        let price1 = parseFloat(priceElement.innerHTML, replace("RS", ""));
        let quantites = quantityElement.value;
        total = toal = (price1 = quantites);
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerHTML = "RS" + total
    }
}