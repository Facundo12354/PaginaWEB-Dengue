document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth",
      });
    });
  });

  // Datos para los casos de dengue por departamento
  const dengueData = {
    labels: [
      "Artigas",
      "Canelones",
      "Cerro Largo",
      "Colonia",
      "Durazno",
      "Flores",
      "Florida",
      "Lavalleja",
      "Maldonado",
      "Montevideo",
      "Paysandú",
      "Río Negro",
      "Rivera",
      "Rocha",
      "Salto",
      "San Jose",
      "Soriano",
      "Tacuarembó",
      "Treinta y tres",
    ],
    datasets: [
      {
        label: "Casos de Dengue",
        data: [
          32, 66, 0, 27, 7, 2, 6, 6, 63, 247, 238, 11, 33, 14, 327, 23, 7, 2, 1,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Configuración del gráfico
  const config = {
    type: "bar",
    data: dengueData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // Crear y renderizar el gráfico
  const ctx = document.getElementById("dengueChart").getContext("2d");
  const dengueChart = new Chart(ctx, config);

  // Interactividad de preguntas frecuentes
  const faqItems = document.querySelectorAll(".faq-item h3");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    });
  });
});
