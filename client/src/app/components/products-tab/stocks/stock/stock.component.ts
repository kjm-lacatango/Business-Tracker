import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { InputFieldComponent } from '../../../../shared/input-field/input-field.component';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { IconsComponent } from '../../../../shared/icons/icons.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    IconsComponent
  ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
  stockId: string | null = null;
  products: any[] = ["Liquor", "Coffee", "Milk Tea", "Fruit Tea"];
  items: any[] = ["Alfonso", "Beer", "Gin", "Red Horse"];

  form: FormGroup;
  product: FormControl;
  item: FormControl;
  currentStock: FormControl;
  addStock: FormControl;
  cost: FormControl;
  update: FormControl;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.product = new FormControl("", []);
    this.item = new FormControl("", []);
    this.currentStock = new FormControl("", []);
    this.addStock = new FormControl("", []);
    this.cost = new FormControl("", []);
    this.update = new FormControl(new Date().toISOString().substring(0, 10), []);

    this.form = this.fb.group({
      product: this.product,
      item: this.item,
      currentStock: this.currentStock,
      addStock: this.addStock,
      cost: this.cost,
      update: this.update
    });

    this.currentStock.disable();
  }

  ngOnInit() {
    this.stockId = this.route.snapshot.paramMap.get("id");
  }

  back() {
    if (this.stockId) {
      this.navigateTo("../../../");
      return;
    }

    this.navigateTo("../../");
  }

  onSave() {}

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route, queryParams: {route: "stock"}});
  }

  markAsPristineAndUntouched(control: AbstractControl) {
    control.markAsPristine();
    control.markAsUntouched();
  }
}
