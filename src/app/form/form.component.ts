import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      lastName: ['']
    })
  }

}
