import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SwalService } from '../services/swal/swal.service';

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
    private swal: SwalService
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
    // auth()
    //   .sendPasswordResetEmail(email)
    //   .then(() => {
    //     return this.modalController.dismiss();
    //   })
    //   .then(() => {
    //     this.swal.viewSuccessMessage(
    //       'Email sent',
    //       'Your Password reset email is sent successfully!, Please check your email'
    //     );
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/user-not-found') {
    //       this.swal.viewErrorMessage(
    //         'No such user',
    //         'Such user does not exist in our database please check your email again'
    //       );
    //     } else {
    //       this.swal.viewErrorMessage(
    //         'Error',
    //         'Error occured while sending the email!'
    //       );
    //     }
    //     console.log('error occured while resetting the password');
    //     console.error(error);
    //   });
  };

  dismissModal = () => {
    this.modalController.dismiss();
  };
}
