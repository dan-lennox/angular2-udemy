import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {

  public selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
