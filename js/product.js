function highlightImg(smallImg) {
    fullImg = document.getElementById("full-img");
    fullImg.src = smallImg.src;
}

const ul = document.getElementById("images");
const images = ul.querySelectorAll("img");

images.forEach((img) => {
    img.onclick = function () {
        highlightImg(this);
    };
});

const cartButton = document.getElementById("cart-button");
cartButton.onclick = function () {
    cartButton.style.backgroundColor = "green";
};