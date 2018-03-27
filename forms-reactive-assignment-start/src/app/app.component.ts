import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {promise} from "selenium-webdriver";
import controlFlow = promise.controlFlow;
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  projectForm:FormGroup;

  statuses=['Stable', 'Critical', 'Finished'];

  projectNotAllow=['test'];

  ngOnInit(){
    this.projectForm = new FormGroup({
      'userDetail': new FormGroup({
        'projectControl': new FormControl(null, [Validators.required], [this.userNameForbiddenAsync]),
        'emailControl': new FormControl(null, [Validators.email])
      }),
      'projectStatus': new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  userNameForbidden(control:FormControl):{[s:string]:boolean}{
    if (this.projectNotAllow.indexOf(control.value) != -1){
      return {'projectNameIsNull': true};
    }
    return null;
  }

  userNameForbiddenAsync(control:FormControl):Promise<any> | Observable<any> {
    const prom = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({'projectNameIsNull': true});
        }
        resolve(null);
      }, 1500)
    });
    return prom;
    }
  }

