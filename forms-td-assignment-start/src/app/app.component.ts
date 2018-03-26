import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("formInfo") formInformation:NgForm;

  defaultSelect = 'advanced';

  submitted=false;

  userInfo={
    email:'',
    password:'',
    subscription:''
  }

  onSubmitForm(){
    this.submitted = true;
    this.userInfo.email = this.formInformation.value.userdata.email;
    this.userInfo.password = this.formInformation.value.userdata.password;
    this.userInfo.subscription = this.formInformation.value.subscription;
  }
}
