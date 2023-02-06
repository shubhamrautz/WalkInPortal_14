import { Component } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {
  hide = true;
legacy: MatFormFieldAppearance = 'fill';
emailFormControl = new FormControl('', [Validators.required, Validators.email]);

matcher = new MyErrorStateMatcher();
}
