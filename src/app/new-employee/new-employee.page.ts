import { Employee } from './../../models/Employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.page.html',
  styleUrls: ['./new-employee.page.scss']
})
export class NewEmployeePage implements OnInit {
  positions = ['Event Organizer', 'Employee'];
  signupForm: FormGroup;
  values;
  constructor(private fb: FormBuilder, private loadingCtrl: LoadingController) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nic: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      status: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.values = this.signupForm.valueChanges;
  }

  ngOnInit() {}

  getErrorMessage = (controller: string) => {
    const formController = this.signupForm.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.signupForm.controls[control].invalid;
  }

  onSubmit = () => {};
}
