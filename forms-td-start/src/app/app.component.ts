import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f')
  singupForm:NgForm;

  defaultQuestion= 'teacher';

  answer:string = "honelight";

  genders = ['male','female'];

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret:'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.singupForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }

  onSubmit(){
    this.user.username = this.singupForm.value.userData.username;
    this.user.email = this.singupForm.value.userData.email;
    this.user.secretQuestion = this.singupForm.value.secretQuestion;
    this.user.answer = this.singupForm.value.answer;
    this.user.gender = this.singupForm.value.gender;
    this.submitted = true;

    this.singupForm.reset();
  }


}
