import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { MovieService } from './services/movie.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LayoutComponent } from './shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
