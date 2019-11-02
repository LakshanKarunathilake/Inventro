import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  constructor() {}

  viewSuccessMessage = (title: string, description: string) => {
    swal(title, description, 'success');
  };

  viewErrorMessage = (title: string, description: string) => {
    swal(title, description, 'error');
  };

  displayConfirmation = (title: string, description: string, callback) => {
    swal(title, description, 'warning', {
      buttons: {
        cancel: true,
        confirm: true
      }
    }).then(ok => callback(ok));
  };

  displayAutoHideMessage = (
    title: string,
    description: string,
    icon: string,
    timer: number
  ) => {
    swal({
      title,
      text: description,
      icon,
      timer,
      buttons: {
        confirm: { visible: false }
      }
    });
  };
}
