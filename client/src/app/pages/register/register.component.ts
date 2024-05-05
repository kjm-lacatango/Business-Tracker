import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IconsComponent } from '../../shared/icons/icons.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    IconsComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isShowPassword: boolean = false;
  isShowConfirmPassword: boolean = false;
  positionOptions: string[] = ["Admin", "Others"];
  genderOptions: string[]= ["Male", "Female", "Others"];

  form: FormGroup;
  firstName: FormControl;
  middleName: FormControl;
  lastName: FormControl;
  age: FormControl;
  gender: FormControl;
  business: FormControl;
  position: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.firstName = new FormControl("", [Validators.required]);
    this.middleName = new FormControl("", []);
    this.lastName = new FormControl("", [Validators.required]);
    this.age = new FormControl("", [Validators.required]);
    this.gender = new FormControl("", [Validators.required]);
    this.business = new FormControl("", [Validators.required]);
    this.position = new FormControl("", [Validators.required]);
    this.email = new FormControl("", [Validators.required]);
    this.password = new FormControl("", [Validators.required]);
    this.confirmPassword = new FormControl("", [Validators.required]);
    this.form = this.fb.group({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      business: this.business,
      position: this.position,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  onSignUp() {
    this.navigateTo("../dashboard");
  }

  toSignIn() {
    this.navigateTo("../login");
  }

  toMain() {
    this.navigateTo("../main");
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
