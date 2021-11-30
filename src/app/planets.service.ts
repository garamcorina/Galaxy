import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor() {}

  filterDiameters(data: any[]) {
    const result = data.filter((value) => value.diameter !== 'unknown');
    return result;
  }

  calculateDiameters(data: any[]): void {
    data.forEach((planet) => {
      planet.diameter /= 100;
      planet.diameter += 'px';
    });
  }

  getPlanetColor() {
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;
    return `rgb(${red},${green},${blue} )`;
  }
}
