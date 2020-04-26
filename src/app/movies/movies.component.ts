import { Component } from '@angular/core';
import { IMovie } from './movie';
import {MovieService} from './movie.service';

@Component ({
    selector: 'app-movies',
    templateUrl:'movies.component.html'
})

export class MoviesComponent{
    pageName: string = 'ANGULAR F';
    pageTitle: string = 'Movies List';
    imageWidth: number = 150;
    imageHeight: number = 210;
    imageMargin: number = 2;
    userName: string = '';
    showCards: boolean = false;
    showLogin: boolean = true;

    movies: IMovie[] = [];

    constructor(private movieService:MovieService) {}

    ngOnInit() :void{
    this.movieService.getMovies().subscribe(data=>this.movies=data);
    }

    toggleCards() : void {
    this.showCards = !this.showCards;
    this.showLogin = !this.showLogin;
  }

}