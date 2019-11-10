import { LoadingController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/Authenticate/authenticate.service';
import { ForgetPasswordComponent } from '../foregetpassword/foregetpassword.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loading;
  /**
   *
   * @param fb Form builder for building the forms in angular material
   * @param router Routing service for the ionic navigation
   * @param loadingController Loading component service to preview preloader
   * @param modalController Modal service to present the modal
   */
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private authenticationService: AuthenticateService
  ) {
    this.loadingController.create({
      message: 'Please wait verifying!',
      duration: 2000
    });
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required]
    });
  }

  public hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  loginAction = async () => {
    const userEmail = this.loginForm.controls['userEmail'].value;
    const userPassword = this.loginForm.controls['userPassword'].value;
    const loading = await this.loadingController.create({
      message: 'Veryfying your details!'
    });
    this.authenticationService
      .loginUser(userEmail, userPassword)
      .then(data => {
        console.log('data', data);
        this.router.navigateByUrl('menu', { replaceUrl: true });
      })
      .finally(() => {
        loading.dismiss();
      });
  };

  getErrorMessage = (controller: string) => {
    const formController = this.loginForm.controls[controller];
    return formController.hasError('required')
      ? 'You must enter a value'
      : formController.hasError('email')
      ? 'Not a valid email'
      : '';
  };

  checkFormControlIsValid(control: string) {
    return this.loginForm.controls[control].invalid;
  }

  previewErrorMessage = ({ code, message }) => {
    const swalProps = { title: '', description: '' };
    switch (code) {
      case 'network-request-failed':
        swalProps.description = 'Check your internet Connection';
        swalProps.title = 'Connection Failure';
        break;
      case 'auth/user-disabled':
        swalProps.description =
          'Your connection is disabled please contact authority';
        swalProps.title = 'Account disabled';
        break;
      case 'auth/wrong-password':
        swalProps.description = 'Your password is incorrect';
        swalProps.title = 'Wrong Password';
        break;
      default:
        console.log('executing default');
        swalProps.description = message;
        swalProps.title = 'Error';
        break;
    }
  };

  forgetPassword = async () => {
    const modal = await this.modalController.create({
      component: ForgetPasswordComponent
    });
    modal.present();
  };
}
