import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private formBuild: FormBuilder
  ) {
 
   }

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName: this.formBuild.control[''],
      lastName: [''],
      email: [''],
      age: ['21']
    })
  }
  
  onSubmit(form: FormGroup){
    // console.log(form);
    
    const {firstName, lastName, email, age} = form.value;
    // const value = form.value;
    const user = new User(firstName, lastName, email, age);
    // console.log(firstName, lastName);
    console.log(user);
  }

}
