import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlanetsService {
  screenWidth: number = document.documentElement.offsetWidth;
  constructor() {}

  calculateDiameters(data: any[]) {
    data.forEach((planet) => {
      planet.newDiameter = planet.diameter / this.screenWidth;
      planet.newDiameter = Math.ceil(planet.newDiameter);
      if (planet.name === "Bespin") {
        planet.newDiameter -= 25;
      }
      planet.newDiameter += "vw";
    });
    return data;
  }
}
