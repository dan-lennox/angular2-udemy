import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[]= [];

  @Output() public recipeSelected = new EventEmitter<Recipe>();


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  public onSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }

}
