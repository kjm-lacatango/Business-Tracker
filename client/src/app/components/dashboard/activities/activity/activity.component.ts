import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputValidations } from '../../../../utils/interfaces';
import { InputFieldComponent } from '../../../../shared/input-field/input-field.component';
import { IconsComponent } from '../../../../shared/icons/icons.component';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    InputFieldComponent,
    IconsComponent
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  activityId: string | null = null;
  products: string[] = ["Milk Tea", "Fruit Tea", "Coffee", "Non-Coffee", "Frappe", "Add Ons"];

  form: FormGroup;
  name: FormControl;
  product: FormControl;
  date: FormControl;
  sold: FormControl;
  sales: FormControl;
  note: FormControl;

  validations: { [x: string]: InputValidations[] } = {
    name: [
      { error: "required", message: "This field is required." },
      { error: "pattern", message: "Invalid Input. Please try again." },
    ],
    product: [
      { error: "required", message: "This field is required." }
    ],
    date: [
      { error: "required", message: "This field is required." }
    ],
    sold: [
      { error: "required", message: "This field is required." },
      { error: "pattern", message: "Invalid input. Please try again." }
    ],
    sales: [
      { error: "required", message: "This field is required." },
      { error: "pattern", message: "Invalid input, Please try again." }
    ]
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  this.name = new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z][ A-Za-z]*$/)]);
    this.product = new FormControl("", [Validators.required]);
    this.date = new FormControl(new Date().toISOString().substring(0, 10), [Validators.required]);
    this.sold = new FormControl("", [Validators.required, Validators.pattern(/^\d+[ A-Za-z]*$/)]);
    this.sales = new FormControl("", [Validators.required, Validators.pattern(/^(\d{1,3}(,\d{3})*|\d+)$/)]);
    this.note = new FormControl("", []);

    this.form = this.fb.group({
      name: this.name,
      product: this.product,
      date: this.date,
      sold: this.sold,
      sales: this.sales,
      note: this.note
    });
  }

  ngOnInit() {
    this.activityId = this.route.snapshot.paramMap.get('id');
  }

  onSave() {
    if (this.activityId) {
      console.log("--from save--");
      console.log(this.form.value);
      return;
    }

    console.log("--form add--");
    console.log(this.form.value);
  }

  back() {
    if (this.activityId) {
      this.navigateTo('../../');
      return;
    }

    this.navigateTo('../');
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
