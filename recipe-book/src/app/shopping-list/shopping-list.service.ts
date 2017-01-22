import { Ingredient } from '../shared/ingredient';

export class ShoppingListService {

  private _items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this._items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this._items, items);
  }

}
