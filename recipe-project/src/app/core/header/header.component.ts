import {Component, EventEmitter, Output} from "@angular/core";
import {DataStorageService} from "../../shared/data-storage.service";
import {RecipeService} from "../../recipe-book/recipe.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderCompoent {
  constructor(private dataStorageSerice:DataStorageService,
              private recipeService:RecipeService,
              public authService:AuthService) {

  }

  onSaveData(){
    this.dataStorageSerice.storeRecipes().subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

  onFetchData(){
    this.dataStorageSerice.fetchRecipes()
  }

  onLogout(){
    this.authService.logout();
  }

  // @Output() switchEmitter: EventEmitter<string> = new EventEmitter<string>();
  //
  //
  // onSwitchRecipe(){
  //   this.switchEmitter.emit('recipe');
  // }
  //
  // onSwitchShopList(){
  //   this.switchEmitter.emit('shopList');
  // }
}
