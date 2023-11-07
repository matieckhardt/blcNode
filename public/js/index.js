function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkAndReorderElements() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var container = document.querySelector(".contenedor-nosotros");
  var textContainer = document.querySelector(".text-container");
  var imageContainer = document.querySelector(".image-container");

  if (screenWidth >= 1200) {
    // Check if textContainer is already the first element
    if (textContainer !== container.firstChild) {
      container.insertBefore(imageContainer, textContainer);
    }
    adjustBootstrapColumns(false); // Ensure columns are set for smaller screens
  } else {
    // Check if imageContainer is not already the first element (meaning it was moved for mobile)
    if (imageContainer !== container.firstChild) {
      container.insertBefore(textContainer, imageContainer);
    }
    adjustBootstrapColumns(true); // Adjust columns for larger screens
  }
}

function adjustBootstrapColumns(isLargeScreen) {
  var allColMd6Elements = document.querySelectorAll(".col-md-6");

  allColMd6Elements.forEach(function (col) {
    if (isLargeScreen) {
      col.classList.remove("col-md-6");
      col.classList.add("col-md-12");
    } else {
      col.classList.remove("col-md-12");
      col.classList.add("col-md-6");
    }
  });
}

// Initial check
document.addEventListener("DOMContentLoaded", function () {
  checkAndReorderElements(); // This will also call adjustBootstrapColumns accordingly
});

// Listen for resize events
window.addEventListener("resize", debounce(checkAndReorderElements, 250));

// Initial check
document.addEventListener("DOMContentLoaded", checkAndReorderElements);

// Listen for resize events
window.addEventListener("resize", debounce(checkAndReorderElements, 250));

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
