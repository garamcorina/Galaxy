import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StarsService {
  constructor() {}

  getRandomX() {
    const screenWidth = document.documentElement.offsetWidth;
    return Math.floor(Math.random() * screenWidth) + "px";
  }
  getRandomY(oldHeight: number, newHeight: number) {
    return (
      Math.floor(Math.random() * (newHeight - oldHeight) + oldHeight) + "px"
    );
  }
}
