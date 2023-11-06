// Function to load images into the carousel
function loadImagesIntoCarousel() {
  console.log("caca");
  fetch("/list-images")
    .then((response) => response.json())
    .then((images) => {
      const carousel = document.getElementById("clientes-carrusel");
      console.log(images);
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = `/img/clientes/${image}`;
        img.className = "img-clientes";
        img.alt = `logo cliente ${image}`;
        carousel.appendChild(img);
      });

      // Here you would re-initialize the carousel if needed,
      // for example if you're using Slick Carousel:
      // $(carousel).slick('unslick'); // First unslick the carousel if needed
      // $(carousel).slick(); // Then initialize it again
      $("#clientes-carrusel").slick({
        dots: true,
        autoplay: true,
        draggable: true,
        fade: true,
        lazyLoad: "progressive",
        infinite: true,
        autoplayspeed: 3000,
        slidesPerRow: 8,
        rows: 2,
        responsive: [
          {
            breakpoint: 478,
            settings: {
              slidesPerRow: 4,
              fade: false,
              rows: 4,
            },
          },
        ],
      });
    })
    .catch((error) => {
      console.error("Error loading images:", error);
    });
}
loadImagesIntoCarousel();
// Call the function to load images when the window loads

$("#home-carrusel")
  .slick({
    arrows: false,
    dots: true,
    autoplay: true,
    draggable: true,
    fade: true,
    lazyLoad: "progressive",
    infinite: true,
    autoplaySpeed: 4000,
    speed: 2000,
  })
  .slick("slickPause");
let initialDelay = 5000;
setTimeout(function () {
  $("#home-carrusel").slick("slickPlay");
}, initialDelay);

$("#alianzas-carrusel").slick({
  arrows: true,
  autoplay: true,
  draggable: true,
  fade: true,
  lazyLoad: "progressive",
  infinite: true,
  autoplayspeed: 3000,
  prevArrow:
    '<div class="slick-prev slick-arrow"><i class=" fas fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-next slick-arrow"><i class=" fas fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        fade: false,
      },
    },
  ],
});

$("#testimonios-carrusel").slick({
  arrows: true,
  autoplay: false,
  draggable: true,
  fade: false,
  infinite: true,
  autoplayspeed: 3000,
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 1,
  dots: false,
  prevArrow:
    '<div class="slick-prev slick-arrow"><i class=" fas fa-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-next slick-arrow"><i class=" fas fa-chevron-right"></i></div>',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        centerPadding: "165px",
      },
    },
  ],
});
$("#teamCar").slick({
  autoplay: true,
  fade: false,
  lazyLoad: "progressive",
  infinite: true,
  autoplayspeed: 2000,
  slidesPerRow: 1,
  rows: 1,
});
const animar = (el) => {
  let imagen = el.firstElementChild.firstElementChild;
  let cuadrado = el.lastElementChild.lastElementChild.lastElementChild;
  imagen.classList.add("zoom");
  cuadrado.classList.add("achique");
};
const salir = (el) => {
  let imagen = el.firstElementChild.firstElementChild;
  let cuadrado = el.lastElementChild.lastElementChild.lastElementChild;
  imagen.classList.remove("zoom");
  cuadrado.classList.remove("achique");
};

$(".navbar-nav li a").on("click", function () {
  if (!$(this).hasClass("dropdown-toggle")) {
    $(".navbar-collapse").collapse("hide");
  }
});

let submit = document.getElementById("submit-btn");

function enviarMensaje() {
  // submit.setAttribute('disabled','disabled')
  let nombre = document.getElementById("nombreFormulario").value;
  let email = document.getElementById("emailFormulario").value;
  let asunto = document.getElementById("asuntoFormulario").value;
  let mensaje = document.getElementById("mensajeFormulario").value;
  let url = document.getElementById("url").value;
  mensajeAJAX(nombre, email, asunto, mensaje, url);
  return false;
}

function mensajeAJAX(nombre, email, asunto, mensaje, url) {
  let urlCompleta = "https://bostoncelop.com.ar/send-mail";

  let request = $.ajax({
    url: urlCompleta,
    type: "POST",
    dataType: "json",
    data: {
      nombre: nombre,
      email: email,
      asunto: asunto,
      mensaje: mensaje,
      url: url,
    },
  });
  request.done(function (response) {
    if (response.success) {
      document.getElementById("form-contacto").reset();
      $("#modalExito").modal("show");
    } else {
      document.getElementById("form-contacto").reset();
      $("#modalFail").modal("show");
    }
  });
  request.fail(function (response) {
    document.getElementById("form-contacto").reset();
    $("#modalFail").modal("show");
  });
}
