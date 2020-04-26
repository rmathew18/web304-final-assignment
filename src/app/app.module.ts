import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavigationComponent,  FooterComponent, MoviesComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
 

  bootstrap: [AppComponent]
})


export class AppModule { }
