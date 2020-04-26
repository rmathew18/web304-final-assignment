import { Component } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl:'header.component.html'
})

export class HeaderComponent{
 pageName:string = 'Movie Rating Website';
 imageWidth: number = 150;
 imageHeight: number = 125;
 imageMargin: number = 2;
}