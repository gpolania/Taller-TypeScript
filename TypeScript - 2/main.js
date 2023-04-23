import { series } from './Data.js';

const seriesTableBody = document.getElementById("TablaSeriesBody");
const averageText = document.getElementById("Average");
const card = document.getElementById("SerieCard");

function TablaDeSeries(series) {
  let promedio = 0;
  series.forEach(serie => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td> ${serie.numero} </td>
                            <td class="text-primary serie-name">${serie.nombre}</td>
                            <td> ${serie.canal} </td>
                            <td> ${serie.temporadas} </td>`;

    seriesTableBody.appendChild(tableRow);
    promedio += serie.temporadas;
  });
  promedio /= series.length;
  averageText.innerHTML = `seasons average: ${promedio}`;

  const serieNames = document.querySelectorAll('.serie-name');
  serieNames.forEach((name) => {
    name.addEventListener('click', (event) => {
      const serieName = event.target.innerText;
      addCard(serieName);
    });
  });
}

function findSerie(serie) {
  for (let i = 0; i < series.length; i++) {
    if (series[i].nombre === serie) {
      return series[i];
    }
  }
  return null;
}

function addCard(serie) {
    const seriep = findSerie(serie);
    if (seriep && card) {
      card.innerHTML = `
        <div class="card" style="display: inline-block; width: 18rem;">
          <img class="card-img-top" src=${seriep.linkImagen} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${seriep.nombre}</h5>
            <p class="card-text">${seriep.descripcion}</p>
            <a href="${seriep.link}">Más información</a>
          </div>
        </div>
      `;
    }
  }

TablaDeSeries(series);