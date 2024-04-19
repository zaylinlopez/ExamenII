function calculateSpecificData() {
    const specificData = {
      "Guatemala": { year1: 10650.549, year2: 12219.7 },
      "Costa Rica": { year1: 6474.64, year2: 6405.1 },
      "Panamá": { year1: 6045.7, year2: 5660.69 }
    };
  
    return specificData;
  }
  
  // Obtener datos del localStorage
  const countriesData = Object.entries(localStorage).map(([country, data]) => [country, JSON.parse(data)]);
  
  // Función para generar la matriz de resultados
  function generateResultsMatrix() {
    const table = document.getElementById("resultsTable");
  
    // Encabezados de la tabla
    const headers = ["País", "  Indice de referencia", "Años de Proyección"];
    const headerRow = document.createElement("tr");
    headers.forEach(headerText => {
      const header = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
  
    const specificData = calculateSpecificData(); // Se movió la llamada a la función
  
    const { projectionYears } = countriesData[0][1];
  
    // Agregar los años de proyección a los encabezados
    for (let i = 0; i <= projectionYears; i++) {
      const header = document.createElement("th");
      header.textContent = 2004 + i; 
      headerRow.appendChild(header);
    }
  
    table.appendChild(headerRow);
  
    // Llenar la tabla con los datos de cada país
    countriesData.forEach(([country, data]) => {
      const row = document.createElement("tr");
  
      // Añadir el nombre del país a la fila
      const countryCell = document.createElement("td");
      countryCell.textContent = country;
      row.appendChild(countryCell);
  
      // Añadir los datos de los años de referencia
      const referenceYearsCell = document.createElement("td");
      referenceYearsCell.textContent = `${specificData[country].year1} - ${specificData[country].year2}`;
      row.appendChild(referenceYearsCell);
  
      // Añadir los datos de proyección
      const { year1, year2 } = specificData[country];
      for (let i = 0; i <= projectionYears; i++) {
        const projectedValue = year2 * (1 + ((year2 - year1) / year1)) ** i;
        const projectionCell = document.createElement("td");
        projectionCell.textContent = projectedValue.toFixed(2);
        row.appendChild(projectionCell);
      }
  
      table.appendChild(row);
    });
  }
  
  // Llamar a la función para generar la matriz de resultados
  generateResultsMatrix();
