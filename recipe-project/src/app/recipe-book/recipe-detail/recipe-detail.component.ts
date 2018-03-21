import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor(
    private recipeService:RecipeService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

  ngOnInit() {


    this.recipe = this.recipeService.getRecipe(
      Number(this.route.snapshot.params['id'])
    );


    this.route.params.subscribe(
      (param:Params)=>{
        var id = Number(param['id']);
        var foundRecipe:Recipe = this.recipeService.getRecipe(id)
        if (foundRecipe === null){
          this.router.navigate(['/notFound']);
        }else{
          this.recipe = foundRecipe;
        }
      }
    )

  }
}
