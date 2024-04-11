import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../../shared/input-field/input-field.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputValidations } from '../../../../utils/interfaces';
import { IconsComponent } from '../../../../shared/icons/icons.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CommonModule,
    InputFieldComponent,
    ReactiveFormsModule,
    IconsComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  productId: string | null = null;
  products: string[] = ['Coffee', 'Milk Tea', 'Fruit Tea'];
  isEditOrAddProduct!: boolean;
  selectedProduct: string = "";

  form: FormGroup;
  product: FormControl;
  newProduct: FormControl;
  type: FormControl;
  date: FormControl;
  soldOut: FormControl;
  price: FormControl;
  note: FormControl;

  validations: { [x: string]: InputValidations[] } = {
    product: [
      { error: "required", message: "This field is required." },
    ],
    newProduct: [
      { error: "required", message: "This field is required." },
      { error: "pattern", message: "Invalid input, please try again." }
    ],
    type: [
      { error: "required", message: "This field is required." },
      { error: "pattern", message: "Invalid input, please try again." }
    ],
    date: [
      { error: "required", message: "This field is required." },
    ],
    soldOut: [
      { error: "required", message: "This field is required." },
      { error: "pattern", message: "Invalid input, please try again." }
    ],
    price: [
      { error: "required", message: "This field is required." },
      { error: "pattern", message: "Invalid input, please try again." }
    ]
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.product = new FormControl("", [Validators.required]);
    this.newProduct = new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z][ A-Za-z0-9]*$/)]);
    this.type = new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z][ A-Za-z0-9]*$/)]);
    this.date = new FormControl(new Date().toISOString().substring(0, 10), [Validators.required]);
    this.soldOut = new FormControl("", [Validators.required, Validators.pattern(/^\d+[ A-Za-z]*$/)]);
    this.price = new FormControl("", [Validators.required, Validators.pattern(/^(\d{1,3}(,\d{3})*|\d+)$/)]);
    this.note = new FormControl("", []);

    this.form = this.fb.group({
      product: this.product,
      type: this.type,
      date: this.date,
      soldOut: this.soldOut,
      price: this.price,
      note: this.note
    });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
  }

  back() {
    if (this.productId) {
      this.navigateTo("../../../");
      return;
    }

    this.navigateTo("../../");
  }

  editProduct() {
    this.isEditOrAddProduct = true;
    this.newProduct.setValue(this.selectedProduct);
  }

  saveProduct() {
    if (this.productId) {
      const productIdx = this.products.findIndex(product => product === this.selectedProduct);
      this.products[productIdx] = this.newProduct.value;
      this.product.setValue(this.newProduct.value);
    } else {
      this.products.push(this.newProduct.value);
      this.product.setValue("");
      this.newProduct.setValue("");
    this.markAsPristineAndUntouched(this.product);
    }
    
    this.isEditOrAddProduct = false;
    this.markAsPristineAndUntouched(this.newProduct);
  }

  cancelProduct() {
    this.isEditOrAddProduct = false;
    this.product.setValue(this.selectedProduct);
    this.newProduct.setValue("");
    this.markAsPristineAndUntouched(this.product);
    this.markAsPristineAndUntouched(this.newProduct);
  }

  onSelect(option: string) {
    this.selectedProduct = option;
  }

  onDelete() {
    const productIdx = this.products.findIndex(product => product === this.selectedProduct);
    this.products = this.products.filter((_, i) => i !== productIdx);
    this.product.setValue("");
    this.markAsPristineAndUntouched(this.product);
  }

  onSave() {
    console.log(this.form.value);
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

  markAsPristineAndUntouched(control: AbstractControl) {
    control.markAsPristine();
    control.markAsUntouched();
  }
}
