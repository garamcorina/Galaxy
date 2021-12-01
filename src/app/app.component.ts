import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Planets } from "./planets";
import { PlanetsService } from "./planets.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  displayedData: Planets[] = [];
  fetchedData: any[] = [];
  nextPage!: string;
  previousPage!: string;
  color: string = this.service.getPlanetColor();

  constructor(private http: HttpClient, private service: PlanetsService) {}

  ngOnInit() {
    this.getPlanets(`https://swapi.py4e.com/api/planets/`);
  }

  getPlanets(url: string): void {
    this.http.get(url).subscribe((data: any) => {
      this.displayedData = this.service.filterDiameters(data.results);
      this.service.calculateDiameters(this.displayedData);
      this.displayedData.forEach((element: any) => {
        this.appendItems(element);
      });
      this.nextPage = data.next;
      this.previousPage = data.previous;
    });
  }

  onScrollDown() {
    if (this.nextPage !== null) {
      this.getPlanets(this.nextPage);
    } else return;
  }

  onScrollUp() {
    // this.getPlanets(this.previousPage);
  }

  appendItems(element: any) {
    this.fetchedData.push(element);
  }

  prependItems(element: any) {
    this.fetchedData.unshift(element);
  }

  // addItems(_method: string, element: any) {
  //   if (_method === "push") {
  //     this.fetchedData.push(element);
  //   } else if (_method === "unshift") {
  //     this.fetchedData.unshift(element);
  //   }
  // }
}
