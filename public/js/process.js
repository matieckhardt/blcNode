document.addEventListener("DOMContentLoaded", function () {
  const items = [
    {
      name: "handshake",
      top: "6vw",
      left: "-2.8vw",
      type: "square",
      icon: "1",
      inner: "Contacto inicial con el participante",
    },
    {
      name: "paper",
      top: "10vw",
      left: "3vw",
      type: "icon",
      icon: "2",
      inner: "Evaluación de nivel y necesidades",
    },
    {
      name: "light",
      top: "-15vw",
      left: "12vw",
      type: "icon",
      icon: "3",
      inner: "Diseño del programa",
    },
    {
      name: "teacher",
      top: "-2vw",
      left: "21vw",
      type: "icon",
      icon: "4",
      inner: "Asignación de docentes y material",
    },
    {
      name: "chat",
      top: "-18vw",
      left: "27vw",
      type: "icon",
      icon: "5",
      inner: "Monitoreo docente y feedback",
    },
    {
      name: "analysis",
      top: "-34vw",
      left: "33.5vw",
      type: "icon",
      icon: "6",
      inner: "Seguimiento y encuestas",
    },
    {
      name: "results",
      top: "-26vw",
      left: "39vw",
      type: "icon",
      icon: "7",
      inner: "Evaluaciones Modulares",
    },
    {
      name: "end",
      top: "-38vw",
      left: "47vw",
      type: "square",
      icon: "8",
      inner: "Reporting de resultados",
    },
  ];

  const chartContainer = document.querySelector(".chart-container");

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = item.type;
    itemDiv.style.top = item.top;
    itemDiv.style.left = item.left;

    // Create an img element
    const img = document.createElement("img");
    img.src = `/icons/process/${item.icon}.png`;
    img.style.width = "auto"; // Make image take full width of the div
    img.style.height = "50%"; // Make image take full height of the div
    itemDiv.appendChild(img);

    itemDiv.addEventListener("mouseenter", function () {
      const textSpan = document.createElement("span");
      textSpan.textContent = item.inner;
      itemDiv.appendChild(textSpan);
      textSpan.style.color = "white";
      itemDiv.classList.add("hover");
      img.style.margin = "15px";
      if (itemDiv.className.includes("icon")) {
        img.style.display = "none"; // Hide the image when hovering if class = "icon"
      }
    });

    itemDiv.addEventListener("mouseleave", function () {
      img.style.display = "block"; // Show the image again when not hovering
      itemDiv.textContent = "";
      img.src = `/icons/process/${item.icon}.png`;
      img.style.width = "auto"; // Make image take full width of the div
      img.style.height = "50%"; // Make image take full height of the div
      itemDiv.appendChild(img);
    });

    chartContainer.appendChild(itemDiv);
  });
});
