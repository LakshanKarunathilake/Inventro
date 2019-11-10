import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SwalService } from '../services/swal/swal.service';
import { EmployeeService } from '../services/Employee/employee.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './foregetpassword.component.html',
  styleUrls: ['./foregetpassword.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  ForgetPasswordForm: FormGroup;
  invalidEmail: any = true;
  emptyField = true;
  hide = true; // Toggling password visibility

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private employee: EmployeeService
  ) {}

  ngOnInit() {
    this.ForgetPasswordForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getErrorMessage = (controller: string) => {
    const formController = this.ForgetPasswordForm.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.ForgetPasswordForm.controls[control].invalid;
  }

  forgetPassword = () => {
    const email = this.ForgetPasswordForm.controls['userEmail'].value;
    const password = this.ForgetPasswordForm.controls['password'].value;
    this.employee.foregetPassword(email, password);
  };

  dismissModal = () => {
    this.modalController.dismiss();
  };
}
