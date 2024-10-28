window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".menuBtn").forEach(button => {
        button.addEventListener("click", function () {

            document.getElementById("AddToCartDiv1").style.display = "block"

            const menuDiv = button.closest('.menuDetails');
            const menuImage = menuDiv.querySelector('img').src;
            const menuName = menuDiv.querySelector('h1').innerText;
            const menuPrice = menuDiv.querySelector('p').innerText;

            addToCart(menuImage, menuName, menuPrice)
        })
    })
})

function addToCart(menuImage, menuName, menuPrice){
    const itemDiv = document.getElementById("AddToCart");

    const cartItemDIv = document.createElement("div")
    cartItemDIv.style.width ="95%"
    cartItemDIv.style.display ="flex"
    cartItemDIv.style.marginLeft ="2.5%"
    cartItemDIv.style.marginTop ="20px"

    const cartImage = document.createElement("img");
    cartImage.style.height = "80px"
    cartImage.src = menuImage;

    const cartName = document.createElement("p");
    cartName.innerText = menuName
    
    const cartPrice = document.createElement("p");
    cartPrice.innerText = menuPrice

    

    cartItemDIv.append(cartImage, cartName, cartPrice)
    itemDiv.append(cartItemDIv)
};