import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService:ShoppingListService) { }
  shoppinglistSubscription:Subscription;
  shoppingEditFormGroup:FormGroup;
  editMode = false;
  editIndex:number;
  editItem:Ingredient;

  getEditMode(){
    return this.editMode ? "edit" : "add";
  }


  // @Output() addIngredientEmitter:EventEmitter<Ingredient> = new EventEmitter<Ingredient>()
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // addIngredient(name:HTMLInputElement, amount:HTMLInputElement){
  //   this.addIngredientEmitter.emit(new Ingredient(name.value, Number(amount.value)));
  // }

  // addIngredient(){
  //   this.addIngredientEmitter.emit(
  //     new Ingredient(
  //       this.nameInputRef.nativeElement.value
  //     , Number(this.amountInputRef.nativeElement.value)));
  // }

  addIngredient(){
    this.shoppingListService.addIngredients(
      new Ingredient(
        this.nameInputRef.nativeElement.value
      , Number(this.amountInputRef.nativeElement.value))
    )
  }

  onSubmit(){
    if (this.editMode == false) {
      this.onAddItem();
    }
    else {
      var ingredient = new Ingredient(
        this.shoppingEditFormGroup.get("name").value,
        Number(this.shoppingEditFormGroup.get("amount").value)
      )
      this.updateIngredient(this.editIndex, ingredient);
      this.editMode = false;
    }
    this.reset();
  }

  onAddItem(){
    // console.log(this.shoppingEditFormGroup.get("name").value);
    // console.log(this.shoppingEditFormGroup.get("amount").value);
    this.shoppingListService.addIngredients(
      new Ingredient(
        this.shoppingEditFormGroup.get("name").value,
        Number(this.shoppingEditFormGroup.get("amount").value)
      )
    )
  }

  ngOnInit() {
    this.shoppingEditFormGroup = new FormGroup({
      "name":new FormControl(null,
        [Validators.required]),
      "amount":new FormControl(null,
        [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
    });

    this.shoppinglistSubscription= this.shoppingListService.startedEditting.subscribe(
      (input:number)=>{
        this.editMode = true;
        this.editIndex = input;
        this.editItem = this.shoppingListService.getIngredient(input);
        this.shoppingEditFormGroup.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
        // this.shoppingEditFormGroup.get("name").setValue(this.editItem.name);
        // this.shoppingEditFormGroup.get("amount").setValue(this.editItem.amount);
      }
    )
  }

  checkSubmit(){
    return !this.shoppingEditFormGroup.valid ;
  }

  // removeRecipe(){
  //   this.shoppingListService.removeIngredient();
  // }

  onEditItem(index:number){
    this.shoppingListService.startedEditting.next(index);
  }

  ngOnDestroy(){
    this.shoppinglistSubscription.unsubscribe();
  }

  updateIngredient(index:number, ingredient:Ingredient){
    this.shoppingListService.updateIngredient(index, ingredient);
  }

  clearForm(){
    this.reset();
    this.editMode = false;
  }

  reset(){
    this.shoppingEditFormGroup.reset();
  }

  checkDelete(){
    return !(this.shoppingEditFormGroup.valid && this.editMode);
  }

  removeRecipe(){
    this.shoppingListService.removeIngredientIdx(this.editIndex);
    this.editMode = false;
    this.reset();
  }

}
