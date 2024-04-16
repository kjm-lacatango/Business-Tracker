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
import { Employee, Product } from '../../../../utils/interfaces';

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
  private navigation = new Subscription();
  isCheckedAll: boolean = false;
  isDelete: boolean = false;
  totalEmployeeSalary: number = 0;

  tabs = [
    {text: "Products", active: true},
    {text: "Track", active: false},
    {text: "Others", active: false},
  ];

  productsDateOptions: string[] = ["All", "Day", "Week", "Month", "Year"];
  productsOptions: string[] = ["All", "Liquor", "Coffee", "Milk Tea", "Fruit Tea"];
  categoryOptions: any[] = [
    { text: "Stock", active: true },
    { text: "Employee", active: false },
    { text: "Trash", active: false },
  ];
  stockOptions: string[] = ["Liquor", "Coffee", "Milk Tea", "Fruit Tea"];
  deleteFromOptions: string[] = ["All", "Products", "Activities", "Employees", "Stocks", "Track"];

  filterProducts: Product[] = [];
  products: Product[] = [
    {id: '1', isChecked: false, product: 'Liquor', name: "Johnny Doe", item: 'Alfonso', price: 30, date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '2', isChecked: false, product: 'Liquor', name: "John Dale E. Torez", item: 'Alfonso', price: 30, date: new Date('02/15/2024'), soldOut: 569, sales: 15000, notes: "This is from main branch"},
    {id: '3', isChecked: false, product: 'Coffee', name: "John T. Smith", item: 'Caramel', price: 30, date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Fruit Tea', name: "John T. Smith", item: 'Banana', date: new Date('02/15/2024'), soldOut: 569, sales: 15000, notes: "This is from branch 2"},
    {id: '4', isChecked: false, product: 'Liquor', name: "John T. Smith", item: 'Beer', date: new Date('02/15/2024'), soldOut: 569, sales: 15000, notes: "This is from branch 1"},
    {id: '4', isChecked: false, product: 'Coffee', name: "John T. Smith", item: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Milk Tea', name: "John T. Smith", item: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Fruit Tea', name: "John T. Smith", item: 'Apple', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Fruit Tea', name: "John T. Smith", item: 'Apple', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Milk Tea', name: "John T. Smith", item: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Fruit Tea', name: "John T. Smith", item: 'Apple', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
    {id: '4', isChecked: false, product: 'Fruit Tea', name: "John T. Smith", item: 'Avocado', date: new Date('02/15/2024'), soldOut: 569, sales: 15000, notes: "This is from main branch"},
    {id: '4', isChecked: false, product: 'Milk Tea', name: "John T. Smith", item: 'Caramel', date: new Date('02/15/2024'), soldOut: 569, sales: 15000},
  ];

  filterEmployees: Employee[] = [];
  employees: Employee[] = [
    {id: "1", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "2", isChecked: false, business: "Lubang's Best", firstName: "Kyle John", middleName: "T.", lastName: "Love", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "3", isChecked: false, business: "KJM Sea Foods", firstName: "Lance Jacob", middleName: "D.", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "4", isChecked: false, business: "KJM Sea Foods", firstName: "Lawrence", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "5", isChecked: false, business: "KJM Sea Foods", firstName: "Stephen Lance", middleName: "L.", lastName: "Smith", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "6", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "7", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "8", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "9", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
  ];

  search: FormControl;
  productDateOption: FormControl;
  productOption: FormControl;
  categoryOption: FormControl;
  stockOption: FormControl;
  deleteFromOption: FormControl;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.search = new FormControl("", []);
    this.productDateOption = new FormControl("", []);
    this.productOption = new FormControl("", []);
    this.categoryOption = new FormControl("", []);
    this.stockOption = new FormControl("", []);
    this.deleteFromOption = new FormControl("", []);

    this.productDateOption.setValue(this.productsDateOptions[0]);
    this.productOption.setValue(this.productsOptions[0]);
    this.categoryOption.setValue(this.categoryOptions[0].text);
    this.stockOption.setValue(this.stockOptions[0]);
    this.deleteFromOption.setValue(this.deleteFromOptions[0]);
    this.filterEmployees = this.employees;
    this.filterProducts = this.products;
  }

  ngOnInit() {
    this.navigation = this.route.queryParams.subscribe(data => {
      if (data['route'] === 'employee') {
        this.tabs[0].active = false;
        this.tabs[1].active = false;
        this.tabs[2].active = true;
      }
    });

    this.employees.forEach(employee => this.totalEmployeeSalary += employee.salary);
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

  onSelectDate(dateOption: string) {}

  onSelectProduct(productOption: string) {}

  onEnterSearch() {
    if (this.tabs[2].active) {
      this.filterEmployees = this.employees.filter(employee => 
        employee.firstName.toLowerCase().includes(this.search.value.toLowerCase()) 
        || employee.lastName.toLowerCase().includes(this.search.value.toLowerCase())
      );
    }
  }

  onInputSearch() {
    if (!this.search.value.trim()) {
      this.filterEmployees = this.employees;
    }
  }

  onDelete() {
    // this.products.forEach(product => product.isChecked && console.log(product.id));
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

  onSelectCategory(option: string) {
    this.categoryOptions.forEach(val => val.text.toLowerCase() === option.toLowerCase() ? val.active = true : val.active = false);
  }
}
