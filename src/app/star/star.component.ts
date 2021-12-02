import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"],
})
export class StarsComponent implements OnInit {
  @Input() stars: any;
  @Input() starsClass: any;

  constructor() {}

  ngOnInit(): void {}
}
