document.addEventListener("DOMContentLoaded", function () {
  const reasons = [
    {
      title: "Mas de 30 años de experiencia en el mercado corporativo",
      image: "/whyus/0.png",
      order: 0,
    },
    {
      title: "Amplia gama de modalidades de formación",
      image: "/whyus/1.png",
      order: 1,
    },
    {
      title: "Programas modulares avalados por Boston Language Consortium",
      image: "/whyus/2.png",
      order: 2,
    },
    {
      title:
        "Excelente equipo humano en la coordinación académica, logística de cursos y procesos administrativos",
      image: "/whyus/3.png",
      order: 3,
    },
    {
      title:
        "Coordinadores dedicados al seguimiento del progreso de los alumnos",
      image: "/whyus/4.png",
      order: 4,
    },
    {
      title: "Reporting continuo de asistencia, desempeño y progreso",
      image: "/whyus/5.png",
      order: 5,
    },
    {
      title:
        "Calidad de nuestros docentes: graduados o en los últimos años de prestigiosas instituciones",
      image: "/whyus/6.png",
      order: 6,
    },
    {
      title:
        "Experiencia en todo tipo de plataformas virtuales de comunicación",
      image: "/whyus/7.png",
      order: 7,
    },
    {
      title: " Acceso a nuestra Plataforma digital",
      image: "/whyus/8.png",
      order: 8,
    },
    {
      title: "Más de 200 clientes nos han confiado su formación en idiomas",
      image: "/whyus/9.png",
      order: 9,
    },
  ];

  const container = document.querySelector(".reasons-container");

  reasons.forEach((member) => {
    const stack = document.createElement("div");
    stack.className = "reason-item";

    const img = document.createElement("img");
    img.className = "reason-image";
    img.src = member.image;
    img.alt = member.title;

    // Set the image height

    const text = document.createElement("p");
    text.className = "reason-text";
    text.textContent = member.title;

    stack.appendChild(img);
    stack.appendChild(text);

    container.appendChild(stack);
  });
});
