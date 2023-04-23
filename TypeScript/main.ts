
import { series } from './Data.js';

import {Serie} from "./Serie.js";

const seriesTableBody: HTMLElement = document.getElementById("TablaSeriesBody")!;
const averageText: HTMLElement = document.getElementById("Average")!;

function TablaDeSeries(series: Serie[]):void{
    let promedio = 0;
    series.forEach(serie => {
        let tableRow = document.createElement("tr");
        tableRow.innerHTML = `<td> ${serie.numero} </td>
                              <td> ${serie.nombre} </td>
                              <td> ${serie.canal} </td>
                              <td> ${serie.temporadas} </td>`;
        seriesTableBody.appendChild(tableRow);
        promedio += serie.temporadas;
    });
    
    promedio /= series.length;
    averageText.innerHTML = `seasons average: ${promedio}`;
}
 
TablaDeSeries(series);