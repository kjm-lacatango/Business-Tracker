import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../shared/card-body/card-body.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IconsComponent } from '../../../shared/icons/icons.component';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { User } from '../../../utils/interfaces';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    IconsComponent,
    InputFieldComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  designations: string[] = ["Admin", "Assistant", "Others"];

  form: FormGroup;
  firstName: FormControl;
  middleName: FormControl;
  lastName: FormControl;
  email: FormControl;
  designation: FormControl;

  constructor(
    private fb: FormBuilder
  ) {
    this.firstName = new FormControl("", []);
    this.middleName = new FormControl("", []);
    this.lastName = new FormControl("", []);
    this.email = new FormControl("", []);
    this.designation = new FormControl("", []);

    this.form = this.fb.group({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      email: this.email,
      designation: this.designation
    })
  }
}
