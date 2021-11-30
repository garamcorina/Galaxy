import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Planets } from './planets';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedData: Planets[] = [];
  fetchedData: any[] = [];
  nextPage!: string;
  previousPage!: string;
  color: string = this.service.getPlanetColor();

  constructor(private http: HttpClient, private service: PlanetsService) {}

  ngOnInit() {
    this.getPlanets(`https://swapi.py4e.com/api/planets/?page=1`);
  }

  getPlanets(url: string): void {
    this.http.get(url).subscribe((data: any) => {
      this.displayedData = this.service.filterDiameters(data.results);
      this.displayedData.forEach((element: any) => {
        this.appendItems(element);
      });
      this.nextPage = data.next;
      this.previousPage = data.previous;
      this.service.calculateDiameters(this.fetchedData);
    });
  }

  onScrollDown() {
    if (this.nextPage === null) {
      this.getPlanets(this.previousPage);
    } else {
      this.getPlanets(this.nextPage);
    }
  }

  onScrollUp() {
    if (this.previousPage === null) {
      this.getPlanets(this.nextPage);
    } else {
      this.getPlanets(this.previousPage);
    }
  }

  appendItems(element: any) {
    this.addItems('push', element);
  }

  prependItems(element: any) {
    this.addItems('unshift', element);
  }

  addItems(_method: string, element: any) {
    if (_method === 'push') {
      this.fetchedData.push(element);
    } else if (_method === 'unshift') {
      this.fetchedData.unshift(element);
    }
  }
}
