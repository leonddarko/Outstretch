$(window).on("load", () => {
    myFunctionLoader();
})
var myVar;

function myFunctionLoader() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    $("#loader").hide();
    $("#myDiv").fadeIn();
}



// Fullscreen Navigation script
$("#openNav").on("click", () => {
    $("#myNav").fadeIn();
});

$("#myNav").on("click", () => {
    $("#myNav").hide();
});



// Type Writer script
$(".typeWriter").on("mouseover", () => {
    typeWriter();
});


var i = 0;
var txt = "A Web Creator & Digital Marketer.";
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewrite").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}




$(".prev").on("click", () => {
    plusSlides(-1);
    $(".mySlides").addClass("w3-animate-opacity");
})

$(".next").on("click", () => {
    $(".mySlides").addClass("w3-animate-opacity");
    plusSlides(1);
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


