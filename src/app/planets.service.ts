import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlanetsService {
  screenWidth: number = document.documentElement.offsetWidth;
  constructor() {}

  filterDiameters(data: any[]) {
    const result = data.filter((value) => value.diameter !== "unknown");
    return result;
  }

  calculateDiameters(data: any[]): void {
    data.forEach((planet) => {
      planet.diameter /= this.screenWidth;
      planet.diameter += "vw";
    });
  }
}
