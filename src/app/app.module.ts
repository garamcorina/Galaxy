import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlanetComponent } from "./planet/planet.component";
import { StarsComponent } from "./stars/stars.component";
import { UniverseService } from "./universe.service";

@NgModule({
  declarations: [AppComponent, PlanetComponent, StarsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [UniverseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
