import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

  private _recipes: Recipe[]= [
    new Recipe('Dummy recipe 1', 'This is a dummy recipe 1', 'https://s-media-cache-ak0.pinimg.com/736x/ca/08/3f/ca083f5db3aeb876a58331c0a0b1d742.jpg', [
      new Ingredient('French fries', 2),
      new Ingredient('Pork meat', 1)
    ]),
    new Recipe('Dummy recipe 2', 'This is a dummy recipe 2', 'https://s-media-cache-ak0.pinimg.com/736x/ca/08/3f/ca083f5db3aeb876a58331c0a0b1d742.jpg', [])
  ];

  constructor() { }

  public getRecipes(): Recipe[] {
    return this._recipes;
  }

}
