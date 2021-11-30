import { Component, Input, OnInit } from "@angular/core";
import { Planets } from "../planets";
import { PlanetsService } from "../planets.service";

@Component({
  selector: "app-planet",
  templateUrl: "./planet.component.html",
  styleUrls: ["./planet.component.css"],
})
export class PlanetComponent implements OnInit {
  @Input() postsData: Planets[] = [];
  @Input() planetColor!: string;

  constructor(private service: PlanetsService) {}

  ngOnChanges() {}

  ngOnInit(): void {}
}
