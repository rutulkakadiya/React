
document.getElementById("menubar").addEventListener("click", function () {
    const menu = document.getElementById("menuBarDiv1");

    menu.style.display = "block";
    menu.style.transform = "translateY(-100%)";
    menu.style.transition = "transform 0.5s ease";

    setTimeout(() => {
        menu.style.transform = "translateY(0)";
    }, 10);
});

document.getElementById("closeIcon").addEventListener("click", function () {
    const menu = document.getElementById("menuBarDiv1");

    menu.style.transform = "translateY(-100%)";

    setTimeout(() => {
        menu.style.display = "none";
    }, 500);
});


const images = [
    "../Images/sahajanand QR (2).png",
    "../Images/sahajanand QR.png",
    "../Images/sahajanand QR (3).png",
    "../Images/sahajanand QR (4).png",
    "../Images/sahajanand QR (5).png",
    "../Images/sahajanand QR (6).png"
];

let currentSlide = 0;

function openSlider(index) {
    currentSlide = index;
    document.getElementById("slider").style.display = "flex";
    document.getElementById("sliderImage").src = images[currentSlide];
}

function closeSlider() {
    document.getElementById("slider").style.display = "none";
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + images.length) % images.length;
    document.getElementById("sliderImage").src = images[currentSlide];
}


const images1 = [
    "../Images/sahajanand QR.png",
    "../Images/sahajanand QR (2).png",
    "../Images/sahajanand QR (3).png",
    "../Images/sahajanand QR (4).png",
    "../Images/sahajanand QR (5).png",
    "../Images/sahajanand QR (5).png",
    "../Images/sahajanand QR (6).png",
    "../Images/sahajanand QR (7).png",
    "../Images/sahajanand QR (8).png"
];

let currentSlide1 = 0;

function openSlider1(index) {
    currentSlide1 = index;
    document.getElementById("slider1").style.display = "flex";
    document.getElementById("sliderImage1").src = images1[currentSlide1];
}

function closeSlider1() {
    document.getElementById("slider1").style.display = "none";
}

function changeSlide1(direction1) {
    currentSlide1 = (currentSlide1 + direction1 + images1.length) % images1.length;
    document.getElementById("sliderImage1").src = images1[currentSlide1];
}
