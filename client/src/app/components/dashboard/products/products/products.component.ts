import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { CardFooterComponent } from '../../../../shared/card-footer/card-footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListsComponent } from '../../../products-tab/products/lists/lists.component';
import { ProductComponent } from '../../../products-tab/products/product/product.component';
import { TrackComponent } from '../../../products-tab/track/track.component';
import { EmployeeComponent } from '../../../products-tab/employees/employee/employee.component';
import { EmployeeListsComponent } from '../../../products-tab/employees/lists/lists.component';
import { Subscription } from 'rxjs';
import { InputFieldComponent } from '../../../../shared/input-field/input-field.component';
import { IconsComponent } from '../../../../shared/icons/icons.component';
import { FormControl } from '@angular/forms';

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
interface Employee {
  id: string;
  isChecked: boolean;
  business: string;
  firstName: string;
  middleInitial?: string;
  lastName: string;
  age: number;
  sex: string;
  startedAt: Date;
  position: string;
  salary: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    ProductListsComponent,
    ProductComponent,
    TrackComponent,
    EmployeeComponent,
    EmployeeListsComponent,
    InputFieldComponent,
    IconsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private navigationFrom = new Subscription();
  isCheckedAll: boolean = false;
  isDelete: boolean = false;

  tabs = [
    {text: "Products", active: true},
    {text: "Track", active: false},
    {text: "Others", active: false},
  ];

  productsDateOptions: string[] = ["All", "Week", "Month", "Year"];
  productsOptions: string[] = ["All", "Coffee", "Milk Tea", "Fruit Tea"];

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

  employees: Employee[] = [
    {id: "1", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "2", isChecked: false, business: "Lubang's Best", firstName: "Kyle John", middleInitial: "T.", lastName: "Love", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "3", isChecked: false, business: "KJM Sea Foods", firstName: "Lance Jacob", middleInitial: "D.", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "4", isChecked: false, business: "KJM Sea Foods", firstName: "Lawrence", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "5", isChecked: false, business: "KJM Sea Foods", firstName: "Stephen Lance", middleInitial: "L.", lastName: "Smith", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "6", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "7", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "8", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "9", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
  ];

  search: FormControl;
  productDateOption: FormControl;
  productOption: FormControl;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.search = new FormControl("", []);
    this.productDateOption = new FormControl("", []);
    this.productOption = new FormControl("", []);

    this.productDateOption.setValue(this.productsDateOptions[0]);
    this.productOption.setValue(this.productsOptions[0]);
  }

  ngOnInit() {
    this.navigationFrom = this.route.queryParams.subscribe(data => {
      if (data['route'] === 'employee') {
        this.tabs[0].active = false;
        this.tabs[1].active = false;
        this.tabs[2].active = true;
      }
    })
  }

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
    this.tabs.forEach(val => {
      if (val.text === tab.text) {
        val.active = true;
      } else {
        val.active = false;
      }
    });
  }

  add() {
    if (this.tabs[0].active) {
      this.navigateTo("../add/product");
      return;
    }
    
    this.navigateTo("../add/employee");
  }

  onEnterSearch() {
    if (this.tabs[2].active) {
      this.employees = this.employees.filter(employee => 
        employee.firstName.toLowerCase().includes(this.search.value.toLowerCase()) 
        || employee.lastName.toLowerCase().includes(this.search.value.toLowerCase())
      );
      console.log(this.employees)
    }
  }

  onDelete() {
    // this.products.forEach(product => product.isChecked && console.log(product.id));
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

  onSelect(e: any) {}
}
