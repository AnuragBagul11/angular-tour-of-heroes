import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(FormsModule),
    // importProvidersFrom(HeroesComponent),
    // importProvidersFrom(HeroDetailComponent),
  ]
};
