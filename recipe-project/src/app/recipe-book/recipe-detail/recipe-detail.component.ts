import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService) {
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

  ngOnInit() {
  }
}
