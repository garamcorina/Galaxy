import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { Planets } from "./planets";
import { PlanetsService } from "./planets.service";
import { StarsService } from "./star/star.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  displayedData: Planets[] = [];
  fetchedData: any[] = [];
  nextPage!: string;
  mediumStars: any[] = [];
  smallStars: any[] = [];
  nrOfStars: number = 50;
  screenHeight: number = 0;

  constructor(
    private http: HttpClient,
    private planetService: PlanetsService,
    private starService: StarsService
  ) {}

  ngOnInit() {
    this.getPlanets(`https://swapi.py4e.com/api/planets/`);
    this.getInfiniteStars();
  }

  getPlanets(url: string): void {
    this.http
      .get(url)
      .pipe(
        map((data: any) => {
          const filteredData = data.results.filter(
            (data: any) => data.diameter !== "unknown"
          );
          this.nextPage = data.next;
          return this.planetService.calculateDiameters(filteredData);
        })
      )
      .subscribe((data: any) => {
        this.displayedData = data;
        this.getStarCoords();
        this.appendItems();
        this.nrOfStars = 50;
      });
  }

  onScrollDown() {
    if (this.nextPage !== null) {
      this.getPlanets(this.nextPage);
    } else return;
  }

  appendItems() {
    this.displayedData.forEach((element: any) => {
      this.fetchedData.push(element);
    });
    console.log(this.fetchedData);
  }

  getStarCoords() {
    const newHeight = document.documentElement.scrollHeight;
    while (this.nrOfStars > 0) {
      this.mediumStars.push({
        xcoord: this.starService.getRandomX(),
        ycoord: this.starService.getRandomY(this.screenHeight, newHeight),
      });
      this.smallStars.push({
        xcoord: this.starService.getRandomX(),
        ycoord: this.starService.getRandomY(this.screenHeight, newHeight),
      });

      this.nrOfStars -= 1;
    }
    this.screenHeight = newHeight;
  }
  getInfiniteStars() {
    setInterval(() => {
      this.screenHeight = document.documentElement.scrollHeight - 200;
      this.nrOfStars = 20;
      this.getStarCoords();
    }, 20000);
  }
}
