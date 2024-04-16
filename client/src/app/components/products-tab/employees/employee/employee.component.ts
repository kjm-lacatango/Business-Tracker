import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { InputFieldComponent } from '../../../../shared/input-field/input-field.component';
import { IconsComponent } from '../../../../shared/icons/icons.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InputValidations } from '../../../../utils/interfaces';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    InputFieldComponent,
    IconsComponent,
    ReactiveFormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeeId: string | null = null;
  isEditOrAddEmployee: boolean = false;
  genderOptions: string[] = ["Male", "Female", "Others"];

  form: FormGroup;
  firstName: FormControl;
  middleName: FormControl;
  lastName: FormControl;
  age: FormControl;
  gender: FormControl;
  startedOn: FormControl;
  position: FormControl;
  salary: FormControl;

  validations: { [x: string]: InputValidations[] } = {
    firstName: [
      {error: "required", message: "This field is required."},
      {error: "pattern", message: "Invalid input, please try again."},
    ],
    lastName: [
      {error: "required", message: "This field is required."},
      {error: "pattern", message: "Invalid input, please try again."},
    ],
    age: [
      {error: "required", message: "This field is required."},
      {error: "pattern", message: "Invalid input, please try again."},
    ],
    gender: [
      {error: "required", message: "This field is required."},
    ],
    startedOn: [
      {error: "required", message: "This field is required."},
    ],
    position: [
      {error: "required", message: "This field is required."},
      {error: "pattern", message: "Invalid input, please try again."},
    ],
    salary: [
      {error: "required", message: "This field is required."},
      {error: "pattern", message: "Invalid input, please try again."},
    ],
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.firstName = new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z][ A-Z-a-z]*$/)]);
    this.middleName = new FormControl("", []);
    this.lastName = new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z][ A-Za-z]*$/)]);
    this.age = new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]);
    this.gender = new FormControl("", [Validators.required]);
    this.startedOn = new FormControl(new Date().toISOString().substring(0, 10), [Validators.required]);
    this.position = new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z][ A-Za-z]*$/)]);
    this.salary = new FormControl("", [Validators.required, Validators.pattern(/^(\d{1,3}(,\d{3})*|\d+)$/)]);

    this.form = this.fb.group({
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      startedOn: this.startedOn,
      position: this.position,
      salary: this.salary
    })
  }

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get("id");
  }

  back() {
    if (this.employeeId) {
      this.navigateTo("../../../");
      return;
    }

    this.navigateTo("../../");
  }

  onSave() {}

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route, queryParams: {route: 'employee'} });
  }
}
