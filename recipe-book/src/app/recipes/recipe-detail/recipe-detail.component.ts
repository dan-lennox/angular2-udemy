import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {

  @Input() public selectedRecipe: Recipe;

  constructor(private _sls: ShoppingListService) { }

  ngOnInit() {
  }

  public onAddToShoppingList() {
    this._sls.addItems(this.selectedRecipe.ingredients);
  }

}
