import { series } from './Data.js';
const seriesTableBody = document.getElementById("TablaSeriesBody");
const averageText = document.getElementById("Average");
function TablaDeSeries(series) {
    let promedio = 0;
    series.forEach(serie => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td> ${serie.numero} </td>
                              <td class="text-primary"> ${serie.nombre}  </td>
                              <td> ${serie.canal} </td>
                              <td> ${serie.temporadas} </td>`;
        seriesTableBody.appendChild(tableRow);
        promedio += serie.temporadas;
    });
    promedio /= series.length;
    averageText.innerHTML = `seasons average: ${promedio}`;
}
TablaDeSeries(series);