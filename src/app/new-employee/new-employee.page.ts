import { Employee } from './../../models/Employee';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { EmployeeService } from '../services/Employee/employee.service';
import { SwalService } from '../services/swal/swal.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.page.html',
  styleUrls: ['./new-employee.page.scss']
})
export class NewEmployeePage implements OnInit {
  imgBody = null;
  positions = [
    'Event Organizer',
    'Employee',
    'Asset Manager',
    'Department Head',
    'Project Manager'
  ];
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private employee: EmployeeService,
    private swal: SwalService
  ) {
    this.signupForm = this.fb.group(
      {
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
      },
      { validator: this.MustMatch('password', 'confirmPassword') }
    );
    this.employee.getAllEmployees();
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
      contactNo: this.signupForm.controls['telephoneNumber'].value,
      unblocked: true,
      img: this.imgBody
    };
    console.log('employee', employee);
    this.employee
      .createNewEmployee(employee)
      .then(() => {
        this.swal.viewSuccessMessage(
          'Success',
          'Employee added successfully !'
        );
        this.signupForm.reset();
      })
      .catch(error =>
        this.swal.viewErrorMessage(
          'Error',
          'Sorry we could not place your request'
        )
      );
  };

  passwordsMatch = () => {
    const password = this.signupForm.controls['password'].value;
    const confirmation = this.signupForm.controls['confirmPassword'].value;
    if (password !== confirmation) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };

  MustMatch = (controlName: string, matchingControlName: string) => {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  };

  // Below part is used to display the selected image and stringify the image and set it into  employee's img property
  onChange(event) {
    console.log('calling');
    console.log(event);
    const file = event.target.files[0];
    const imgModel = {
      Title: undefined,
      Description: undefined,
      ImageType: undefined,
      Base64String: undefined
    };
    let imgURL;

    if (file.type.split('/')[0] !== 'image') {
      // check if it's a image or not
      this.swal.viewErrorMessage('Error', 'Please upload an image');
      return;
    }

    imgModel.ImageType = file.type.split('/')[1]; // set file type
    const reader = new FileReader();
    reader.onload = event2 => {
      imgURL = reader.result;
      imgModel.Base64String = imgURL.toString();
    };
    reader.onloadend = end => {
      this.imgBody = JSON.stringify(imgModel);
    };
    reader.readAsDataURL(file); // read and loads the file
  }
}
