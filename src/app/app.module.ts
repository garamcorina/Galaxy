import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsService } from './planets.service';
import { StarsComponent } from './stars/stars.component';
import { UniverseComponent } from './universe/universe.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    UniverseComponent,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
