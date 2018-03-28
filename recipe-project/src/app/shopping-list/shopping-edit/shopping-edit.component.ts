import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService:ShoppingListService) { }

  shoppingEditFormGroup:FormGroup;

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
      "name":new FormControl(null, [Validators.required]),
      "amount":new FormControl(null, [Validators.required])
    });
  }

}
