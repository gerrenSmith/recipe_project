import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('Creole Gumbo', 'A New Orleans style sup', 'https://media-cldnry.s-nbcnews.com/image' +
      '/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2016_37/1157554' +
      '/food-poppy-tooker-creole-gumbo-001-tease-today-160913-1157554.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
