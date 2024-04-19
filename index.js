// Vector de países
const countries = ["Panamá", "Costa Rica", "Guatemala"]; // Agrega más países según sea necesario

// Función para llenar el select de países
function populateCountries() {
  const select = document.getElementById("countrySelect");
  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  });
}

// Evento submit del formulario
document.getElementById("dataForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const country = document.getElementById("countrySelect").value;
  const year1 = parseInt(document.getElementById("year1").value);
  const year2 = parseInt(document.getElementById("year2").value);
  const projectionYears = parseInt(document.getElementById("projectionYears").value);

  // Guardar datos en localStorage
  localStorage.setItem(country, JSON.stringify({ year1, year2, projectionYears }));

  // Redirigir a procesa.html
  window.location.href = "procesa.html";
});

// Llamar a la función para llenar el select con los países
populateCountries();
