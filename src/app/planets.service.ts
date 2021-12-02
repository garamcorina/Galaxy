import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlanetsService {
  screenWidth: number = document.documentElement.offsetWidth;
  constructor() {}

  calculateDiameters(data: any[]) {
    data.forEach((planet) => {
      planet.diameter /= this.screenWidth;
      planet.diameter = Math.ceil(planet.diameter);
      if (planet.name === "Bespin") {
        planet.diameter -= 25;
      }
      planet.diameter += "vw";
    });
    return data;
  }
}
