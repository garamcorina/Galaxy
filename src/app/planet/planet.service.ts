import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PlanetService {
  constructor() {}

  getTerrainColor(terrain: string) {
    switch (terrain) {
      case "desert":
        return "#A26339";
      case "grasslands":
        return "#B0B389";
      case "mountains":
        return "#A8A59C";
      case "jungle":
        return "#2EA879";
      case "rainforests":
        return "#008060";
      case "tundra":
        return "#8C9C5C";
      case "ice caves":
        return "#A0BEDA";
      case "mountain ranges":
        return "#3E5456";
      case "swamp":
        return "#092E2D";
      case "jungles":
        return "#003829";
      case "gas giant":
        return "#98DCFF";
      case "forests":
        return "#237319";
      case "lakes":
        return "#337FB2";
      case "grassy hills":
        return "#567D46";
      case "swamps":
        return "#252A2A";
      case "cityscape":
        return "#D8E3E4";
      case "rock":
        return "#5A4D41";
      case "barren":
        return "#837560";
      case "scrublands":
        return "hsl(24.3, 97.4%, 54.3%)";
      case "savanna":
        return "#D1BD92";
      case "canyons":
        return "#77422C";
      case "ocean":
        return "#1DA2D8";
      case "sinkholes":
        return "#49716D";
      case "volcanoes":
        return "#4E2728";
      case "lava rivers":
        return "#CF1020";
      case "caves":
        return "#4D493A";
      case "rivers":
        return "#86B4BC";
      case "airless asteroid":
        return "#BABDC3";
      case "glaciers":
        return "#B5E2F4";
      case "ice canyons":
        return "#9EE4D9";
      case "fungus forests":
        return "#8F8177";
      case "fields":
        return "#236F21";
      case "rock arches":
        return "#AC4313";
      case "grass":
        return "#75F336";
      case "plains":
        return "#FFDB58";
      case "urban":
        return "#B01F32";
      case "hills":
        return "#517576";
      case "bogs":
        return "#38464B";
      case "savannas":
        return "#38464B";
      case "rocky islands":
        return "#34322E";
      case "oceans":
        return "#006699";
      case "seas":
        return "#C2DFFF";
      case "mesas":
        return "#B78771";
      case "deserts":
        return "#EDC9AF";
      case "reefs":
        return "#FF7F50";
      case "islands":
        return "#F9EDD7";
      case "rocky deserts":
        return "#ED8E4A";
      case "valleys":
        return "#9599A5";
      case "oceans":
        return "#006699";
      default:
        return "#666699";
    }
  }
}
