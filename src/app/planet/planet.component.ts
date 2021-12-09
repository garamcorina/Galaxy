import { Component, Input, OnInit } from "@angular/core";
import { Planets } from "../planets";
import { PlanetService } from "./planet.service";

@Component({
  selector: "app-planet",
  templateUrl: "./planet.component.html",
  styleUrls: ["./planet.component.css"],
})
export class PlanetComponent implements OnInit {
  @Input() planet!: Planets;
  isVisible!: boolean;
  terrainArr: any[] = [];
  terrainColors: any = { ...this.service.terrainColors };

  constructor(private service: PlanetService) {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.getTerrainTypes();
    this.getWaterSurface();
    this.getTerrainHeight();
  }

  setVisible() {
    this.isVisible = true;
  }

  unsetVisible() {
    this.isVisible = false;
  }
  getTerrainHeight() {
    const surfaceArr = this.planet.surface_water.length;
    const waterPercentage = this.planet.surface_water.substring(
      0,
      surfaceArr - 1
    );

    return (100 - Number(waterPercentage)) / this.terrainArr.length + "%";
  }

  getTerrainTypes() {
    this.terrainArr = this.planet.terrain.split(", ");
    this.planet.terrain = this.terrainArr;
  }

  getWaterSurface() {
    if (this.planet.surface_water === "unknown") {
      this.planet.surface_water = "0";
    }
    this.planet.surface_water += "%";
  }
}
