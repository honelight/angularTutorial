import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../shared/ingredient.model";
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Subscription";
import {relativeToRootDirs} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id:number;
  editMode = false;
  editIndex:number;
  constructor(private route:ActivatedRoute,
              private recipeService:RecipeService,
              private router:Router) { }

  recipeForm:FormGroup;
  paramSubscription:Subscription;
  editSubscription:Subscription;

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id']!=null;
        this.initForm();
      }
    )


    this.editSubscription = this.recipeService.editSubject.subscribe(
      (recipe:Recipe)=>{

        console.log("here");
        // this.edit = true;
        // var ingredients:FormArray = new FormArray([]);
        // recipe.ingredients.forEach(i =>{
        //   ingredients.push(new FormControl({
        //     name:i.name,
        //     amount:i.amount
        //   }));
        // });
        //
        //
        // this.recipeEditFormGroup.get("name").setValue(recipe.name);
        // this.recipeEditFormGroup.get("description").setValue(recipe.description);
        // this.recipeEditFormGroup.get("picture").setValue(recipe.imagePath)
        // this.recipeEditFormGroup.get("ingredients").setValue(ingredients);
      }
    );
  }

  // addIngredient(name:string, amount:number){
  //   //make sure that this is tested
  //   <FormArray>(this.recipeForm.get("ingredients").value).push(
  //     new FormGroup({
  //       "name": new FormControl(name),
  //       "amount": new FormControl(amount)
  //     })
  //   );
  // }

  onSubmit(){
    var name = this.recipeForm.get("name").value;
    var description = this.recipeForm.get("description").value;
    var picture = this.recipeForm.get("picture").value;
    var ingredients = this.recipeForm.get("ingredients").value;


    if (this.editMode){
      this.recipeService.editRecipe(
        new Recipe(this.id, name, description, picture, ingredients));
    }
    else{
      this.recipeService.addRecipe(name, description, picture, ingredients);
    }
    this.router.navigate([".."],{relativeTo:this.route});
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']){
        for ( let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name, Validators.required),
              'amount':new FormControl(ingredient.amount,
                [Validators.required])
            })
          );
        }
      }
    }


    this.recipeForm = new FormGroup({
      "name": new FormControl(recipeName, [Validators.required]),
      "description": new FormControl(recipeDescription),
      "picture": new FormControl(recipeImagePath),
      "ingredients": recipeIngredients
    });
  }


  getEditText(){
    console.log(this.editMode);
    return this.editMode ? "edit" : "add";
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
    this.paramSubscription.unsubscribe();
  }

  getIngredientData(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        "name": new FormControl(),
        "amount": new FormControl()
      })
    )
  }

  onCancel(){
    this.router.navigate([".."],{relativeTo: this.route});
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
