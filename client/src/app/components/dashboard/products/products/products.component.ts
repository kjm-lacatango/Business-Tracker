import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { CardFooterComponent } from '../../../../shared/card-footer/card-footer.component';
import { ActivatedRoute, Router } from '@angular/router';

interface Product {
  id: string;
  isChecked: boolean;
  product: string;
  type: string;
  price?: number;
  date: Date;
  soldOut: number;
  sales: number;
  notes?: string;
}

@Component({
  selector: 'app-hacked',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isCheckedAll: boolean = false;
  isDelete: boolean = false;
  isProductActive: boolean = true;

  products: Product[] = [
    {id: '1', isChecked: false, product: 'Ice Tea', type: 'Caramel', price: 30, date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '2', isChecked: false, product: 'Ice Tea', type: 'Caramel', price: 30, date: new Date('02/15/2024'), soldOut: 569, sales: 15000, notes: "Discounted on christmas and new year or birthday"},
    {id: '3', isChecked: false, product: 'Ice Tea', type: 'Caramel', price: 30, date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Ice Tea', type: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
  ];

  tabs = [
    {text: "Products", active: true},
    {text: "Track", active: false},
    {text: "Others", active: false},
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onCheck(id?: string) {
    if (!id) {
      this.isCheckedAll = !this.isCheckedAll;
      this.products.forEach(product => product.isChecked = this.isCheckedAll);
    }

    this.products.map(product => {
      if (product.id === id) {
        product.isChecked = !product.isChecked;
      }
    });

    const checked = this.products.some(val => val.isChecked);
    if (checked) {
      this.isDelete = true;
    } else {
      this.isDelete = false;
    }
  }

  onSelectTab(tab: any) {
    this.tabs.forEach(val => val.text === tab.text ? val.active = true : val.active = false);
  }

  add() {
    this.navigateTo("../add");
  }

  edit(id: string) {
    this.navigateTo(`../update/${id}`);
  }

  onDelete() {
    this.products.forEach(product => product.isChecked && console.log(product.id));
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }
}
