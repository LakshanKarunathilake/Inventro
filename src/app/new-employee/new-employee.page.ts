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

  onSubmit = () => {
    const employee: Employee = {
      firstname: this.signupForm.controls['firstName'].value,
      lastname: this.signupForm.controls['lastName'].value,
      gender: this.signupForm.controls['gender'].value,
      status: this.signupForm.controls['status'].value,
      address: this.signupForm.controls['address'].value,
      password: this.signupForm.controls['password'].value,
      nic: this.signupForm.controls['nic'].value,
      email: this.signupForm.controls['email'].value,
      contactNo: this.signupForm.controls['telephoneNumber'].value
    };
    console.log('employee', employee);
  };
}
