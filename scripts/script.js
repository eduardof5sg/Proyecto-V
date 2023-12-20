var startImage = document.getElementById("start-image");
var video = document.getElementById("intro-video");
var videoContainer = document.querySelector(".video-container");
var logoImage = document.querySelector(".logo-animation");
// Almacena las dimensiones originales del video y su contenedor
var originalVideoWidth = video.width;
var originalVideoHeight = video.height;
var originalContainerClass = videoContainer.className;
var playVideo = false; // Inicialmente, el video no está en estado de reproducción
var linesContainer = document.querySelector(".lines-container"); // lineas animadas
const h2Element = document.querySelector('.right-text');

startImage.addEventListener("click", function() {
    if (video.paused) {
        // Al iniciar la reproducción
        video.play();
        video.style.display = "block";
        h2Element.classList.add('show');
        startImage.style.display = "none"; // Oculta la imagen al reproducir el video
        videoContainer.classList.add("fullscreen");
        video.classList.add("play-video");
      
        logoImage.style.display = "block";
        linesContainer.classList.add("animate-lines");
        setTimeout(function() {
            logoImage.classList.add("show");
        }, 500);
        playVideo = true;
     }
});

video.addEventListener("click", function() {
        if (playVideo) {
            video.pause();
            video.style.display = "none";
            startImage.style.display = "block"; // Muestra la imagen al pausar el video
            videoContainer.classList.remove("fullscreen");
            video.classList.remove("play-video");
            linesContainer.classList.remove("animate-lines");
            video.width = originalVideoWidth; // Restablece el ancho original del video
            video.height = originalVideoHeight; // Restablece la altura original del video
            playVideo = false;

            setTimeout(function() {
                logoImage.classList.remove("show");
            }, 500);
        }
    });

//---------------------------------  SLIDER ANIMATION -------------------------------- //

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});


// -----------------------------  RESPONSIVE MENU  --------------------------------------- //



