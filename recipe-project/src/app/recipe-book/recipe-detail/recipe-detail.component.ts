import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit, OnDestroy {

  @Input() recipe:Recipe;
  subscription:Subscription;

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



    this.subscription=this.route.params.subscribe(
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

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
