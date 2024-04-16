import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../shared/card-body/card-body.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  genderOptions: string[] = ["Male", "Female", "Others"];
  isEdit: boolean = true;

  form: FormGroup;
  firstName: FormControl;
  middleName: FormControl;
  age: FormControl;
  gender: FormControl;
  lastName: FormControl;
  email: FormControl;
  logo: FormControl;
  designation: FormControl;
  note: FormControl;

  constructor(
    private fb: FormBuilder
  ) {
    this.firstName = new FormControl({value: "", disabled: true}, [Validators.required]);
    this.middleName = new FormControl({value: "", disabled: true}, []);
    this.lastName = new FormControl({value: "", disabled: true}, [Validators.required]);
    this.email = new FormControl({value: "", disabled: true}, [Validators.required]);
    this.logo = new FormControl({value: "", disabled: true}, []);
    this.designation = new FormControl({value: "", disabled: true}, [Validators.required]);
    this.age = new FormControl({value: "", disabled: true}, [Validators.required]);
    this.gender = new FormControl({value: "", disabled: true}, [Validators.required]);
    this.note = new FormControl({value: "", disabled: true}, []);
    
    this.form = this.fb.group({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      email: this.email,
      logo: this.logo,
      designation: this.designation,
      note: this.note
    })
  }

  onEdit() {
    this.isEdit = false;
    this.firstName.enable();
    this.middleName.enable();
    this.lastName.enable();
    this.email.enable();
    this.logo.enable();
    this.designation.enable();
    this.age.enable();
    this.gender.enable();
    this.note.enable();
  }

  onSave(cancel?: string) {
    if (!cancel) {
      console.log(this.form.value)
    }

    this.isEdit = true;
    this.firstName.setValue("");
    this.middleName.setValue("");
    this.lastName.setValue("");
    this.email.setValue("");
    this.logo.setValue("");
    this.designation.setValue("");
    this.age.setValue("");
    this.gender.setValue("");
    this.note.setValue("");
    this.firstName.disable();
    this.middleName.disable();
    this.lastName.disable();
    this.email.disable();
    this.logo.disable();
    this.designation.disable();
    this.age.disable();
    this.gender.disable();
    this.note.disable();
    this.markAsPristineAndUntouched(this.firstName);
    this.markAsPristineAndUntouched(this.middleName);
    this.markAsPristineAndUntouched(this.lastName);
    this.markAsPristineAndUntouched(this.age);
    this.markAsPristineAndUntouched(this.gender);
    this.markAsPristineAndUntouched(this.email);
    this.markAsPristineAndUntouched(this.logo);
    this.markAsPristineAndUntouched(this.designation);
    this.markAsPristineAndUntouched(this.note);
  }

  markAsPristineAndUntouched(control: AbstractControl) {
    control.markAsUntouched();
    control.markAsPristine();
  }
}
