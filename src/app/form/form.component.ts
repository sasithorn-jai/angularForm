import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;
  @Output() change = new EventEmitter;
  constructor(
    private formBuild: FormBuilder
  ) {
 
   }

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      email: ['',[this.EmailValidate]],
      age: [21,[Validators.min(0), Validators.max(99)]]
    })
  }
  EmailValidate(control: AbstractControl){
    const value: string = control.value;

    if(value && value.includes('@')){
      return null;
    }
    return {
      email: true
    }
  }
  
  onSubmit(form: FormGroup){
    console.log(form.valid, form.invalid);
    console.log((<FormControl>form.get('firstName')).errors);
    // const {firstName, lastName, email, age} = form.value;
    // const user = new User(firstName, lastName, email, age);
    // console.log(user);
    if(form.valid){
      const {firstName, lastName, email, age} = form.value;
      const user = new User(firstName, lastName, email, age);
      console.log(user);
      this.change.emit(user);  
      console.log(user);  
    }
    else{
      ['firstName', 'lastName', 'age', 'email'].forEach((key: string)=>{
        // console.log(form.get(key).touched);
        form.get(key).markAsTouched();
        // console.log(form.get(key).touched);
      })
    }
  }


}