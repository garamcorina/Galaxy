import { Component, Input, OnInit } from "@angular/core";
import { Planets } from "../planets";

@Component({
  selector: "app-planet",
  templateUrl: "./planet.component.html",
  styleUrls: ["./planet.component.css"],
})
export class PlanetComponent implements OnInit {
  @Input() postsData: Planets[] = [];

  constructor() {}

  ngOnInit(): void {}
}
