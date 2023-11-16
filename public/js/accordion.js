document.addEventListener("DOMContentLoaded", function () {
  const accordionData = [
    {
      title: "CAPACITACIÓN EN IDIOMAS",
      description: ` <strong>CURSOS REGULARES </strong><br />

Con énfasis en la comunicación espontánea efectiva dentro de un marco curricular. <br />

<strong>PROGRAMAS CUSTOMIZADOS SEGÚN EL ROL EN LA ORGANIZACIÓN </strong><br />

Con un diseño a medida de las necesidades, desafíos y tareas de los participantes. <br />

<strong>CURSOS INTENSIVOS </strong><br />

Para procesos de capacitación con intensa carga horaria. <br />

<strong>CLASES DE CONVERSACIÓN </strong><br />

Con dinámicas interactivas a través de técnicas de speeching, presentaciones in promptu y método PREP. <br />

<strong>CAPACITACIONES TEMÁTICAS </strong><br />

Para adquirir vocabulario y habilidades clave para el desempeño laboral. <br />

<strong>BLC ON-LINE </strong><br />

Como complemento de nuestros programas, los participantes tienen acceso exclusivo a nuestra plataforma de e-learning con amplia variedad de actividades interactivas.`,
      color: "#3D6F97", // Red
      zIndex: 5,
    },
    {
      title: "PREPARACIÓN PARA EXÁMENES INTERNACIONALES",
      description: `
De inglés general o de negocios, de español y de portugués según nivel de idioma de los participantes.`,
      color: "#DD1E97", // MediumAquamarine
      zIndex: 4,
    },
    {
      title: "DIAGNÓSTICO DE DESEMPEÑO LINGÜÍSTICO",
      description: `
A través de una evaluación integral de nivel de lengua, medimos los conocimientos lingüísticos y la capacidad de un candidato para comunicarse en su potencial puesto de trabajo.`,
      color: "#8D5BB5", // MediumPurple
      zIndex: 3,
    },
    {
      title: "SERVICIO DE TRADUCCIÓN Y SERVICIO DE INTERPRETACIÓN",
      description: `Servicio de traducción y servicio de Interpretación: simultánea, consecutiva, susurro y simultánea remota (ISR).
Con altos estándares de precisión, nuestro equipo lidera proyectos de traducción o interpretación en variadas industrias o áreas técnicas.`,
      color: "#83B58C", // Gold
      zIndex: 2,
    },
    {
      title: "ASESORAMIENTO - AUDITORÍA ACADÉMICA",
      description: `Junto con nuestros clientes, instrumentamos programas de idiomas alineados con las necesidades de la empresa, diseñamos políticas de seguimiento y procesos de monitoreo y reporting.`,
      color: "#9AB5CA", // DeepSkyBlue
      zIndex: 1,
    },
  ];

  const accordion = document.querySelector(".accordion");

  let activeLayer = null;

  accordionData.forEach((item, index) => {
    const layer = document.createElement("div");
    layer.className = "layer";
    layer.style.backgroundColor = item.color;
    layer.style.zIndex = item.zIndex;
    layer.style.paddingTop = item.zIndex !== 5 ? "90px" : "50px";

    const layerTitle = document.createElement("div");
    layerTitle.className = "layerTitle";
    layerTitle.textContent = item.title;
    layerTitle.style.color = "white";
    layerTitle.addEventListener("click", () => handleToggle(index));

    const layerDescription = document.createElement("div");
    layerDescription.className = "layerDescription";
    layerDescription.style.fontSize = "1rem";
    layerDescription.style.fontFamily = "poppins, sans-serif";
    layerDescription.style.maxHeight = "0";
    layerDescription.style.color = "white";

    layerDescription.innerHTML = item.description;

    layer.appendChild(layerTitle);
    layer.appendChild(layerDescription);

    accordion.appendChild(layer);
  });

  const handleToggle = (index) => {
    const layers = document.querySelectorAll(".layer");
    const descriptions = document.querySelectorAll(".layerDescription");

    // If the same title is clicked, collapse it. Otherwise, open the clicked one and close others.
    if (activeLayer === index) {
      activeLayer = null;
    } else {
      activeLayer = index;
    }

    layers.forEach((layer, idx) => {
      const description = descriptions[idx];
      if (idx === activeLayer) {
        layer.classList.add("active");
        description.style.maxHeight = "500px";
      } else {
        layer.classList.remove("active");
        description.style.maxHeight = "0";
      }
    });
  };
});
