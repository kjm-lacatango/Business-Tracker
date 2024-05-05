import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { IconsComponent } from '../../shared/icons/icons.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { CardHeaderComponent } from '../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../shared/card-body/card-body.component';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Message } from '../../utils/interfaces';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    InputFieldComponent,
    IconsComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private loginSub: Subscription = new Subscription();
  message: Message = {status: "", text: " ", show: false};
  isLoading: boolean = false;
  isShowPassword: boolean = false;
  designationOptions: string[] = ["Admin", "Others"];

  form: FormGroup;
  email: FormControl;
  password: FormControl;
  business: FormControl;
  designation: FormControl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private user: UserService
  ) {
    this.email = new FormControl("", [Validators.required]);
    this.password = new FormControl("", [Validators.required]);
    this.business = new FormControl("", [Validators.required]);
    this.designation = new FormControl("", [Validators.required]);
    this.form = this.fb.group({
      email: this.email,
      password: this.password,
      business: this.business,
      designation: this.designation
    });
  }

  ngOnInit() {
    this.loginSub = this.user.events.subscribe(event => {
      if (!event || this.user.isLoading) return;

      if (this.user.errorMessage || (event === "GetUserError" && this.user.error)) {
        this.markAsPristineAndUntouched(this.email);
        this.markAsPristineAndUntouched(this.password);
        this.markAsPristineAndUntouched(this.business);
        this.markAsPristineAndUntouched(this.designation);

        this.message.text = this.user.errorMessage;
        this.showErrorMessage();
        setTimeout(() => {
          this.form.enable();
          this.isLoading = false;
        }, 2000);
      }

      if (event === "GetUser" && this.user.successMessage) {
        this.message.text = this.user.successMessage;
        this.showSuccessMessage();

        setTimeout(() => {
          this.navigateTo("../dashboard");
          this.isLoading = false;
        }, 1000);
        console.log(this.user.value)
      } 
    });
  }

  ngOnDestroy() {
    this.loginSub.unsubscribe();
  }

  onSignIn() {
    this.resetMessage();
    this.form.disable();
    this.user.login(this.form.value);
    this.isLoading = true;
  }

  toSignup() {
    this.navigateTo("../register");
  }
  
  toMain() {
    this.navigateTo("../main");
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }

  markAsPristineAndUntouched(control: AbstractControl) {
    control.markAsPristine();
    control.markAsUntouched();
  }

  showSuccessMessage() {
    this.message.status = "success";
    this.displayMessage();
  }

  showErrorMessage() {
    this.message.status = "error";
    this.displayMessage();
  }

  displayMessage() {
    this.message.show = true;
    setTimeout(() => this.resetMessage(), 3000);
  }

  resetMessage() {
    this.message.status = "";
    this.message.text = "";
    this.message.show = false;
  }
}
