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
import { StockListsComponent } from '../../../products-tab/stocks/lists/lists.component';
import { InvestorsListsComponent } from '../../../products-tab/investors/lists/lists.component';

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
    IconsComponent,
    StockListsComponent,
    InvestorsListsComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private navigation = new Subscription();
  isCheckedAll: boolean = false;
  isDelete: boolean = false;
  totalEmployeeSalary: number = 0;
  investmentAmount: number = 0;

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
    { text: "Investors", active: false }
  ];
  stockOptions: string[] = ["Liquor", "Coffee", "Milk Tea", "Fruit Tea"];

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

  filterStocks: any[] = [];
  stocks: any[] = [
    {id: "1", isChecked: false, updatedBy: "Steve Doe", product: "Liquor", item: "Alfonso", addedStock: 100, recentStock: 2000, currentStock: 500, costAdded: 15000, updatedOn: new Date("2023-12-10")},
    {id: "2", isChecked: false, updatedBy: "Patrice Joy P. Jordan", product: "Liquor", item: "Beer", addedStock: 100, recentStock: 2000, currentStock: 1500, costAdded: 15000, updatedOn: new Date("2024-04-10")},
    {id: "3", isChecked: false, updatedBy: "Hans L. Smith", product: "Liquor", item: "Gin", currentStock: 2000, addedStock: 100, recentStock: 2000, costAdded: 1500, updatedOn: new Date("2024-04-10")},
    {id: "4", isChecked: false, updatedBy: "Patrice Joy P. Jordan", product: "Coffee", item: "Caramel", addedStock: 100, recentStock: 2000, currentStock: 1000, costAdded: 15000, updatedOn: new Date("2024-04-10")},
    {id: "5", isChecked: false, updatedBy: "Clyde Joseph T. Poland", product: "Fruit Tea", item: "Avocado", addedStock: 100, recentStock: 2000, currentStock: 200, costAdded: 15000, updatedOn: new Date("2024-04-10")},
    {id: "6", isChecked: false, updatedBy: "Clyde Joseph T. Poland", product: "Fruit Tea", item: "Apple", addedStock: 100, recentStock: 2000, currentStock: 1000, costAdded: 15000, updatedOn: new Date("2024-04-10")},
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

  filterInvestors: any[] = [];
  investors: any[] = [
    {id: "1", isChecked: false, name: "Joseph P. Garcia", amount: 10000, profit: 5000, updatedOn: new Date("2024-02-20")},
    {id: "2", isChecked: false, name: "Aliaza Joy L. Doe", amount: 10000, profit: 5000, updatedOn: new Date("2024-02-20"), note: "She wants her investment profit added to her investment amount."},
    {id: "3", isChecked: false, name: "Maria Anica B. Smith", amount: 10000, profit: 5000, updatedOn: new Date("2024-02-20")},
    {id: "4", isChecked: false, name: "Ryan Abraham I. David", amount: 10000, profit: 5000, updatedOn: new Date("2024-02-20")},
  ];

  search: FormControl;
  productDateOption: FormControl;
  productOption: FormControl;
  categoryOption: FormControl;
  stockOption: FormControl;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.search = new FormControl("", []);
    this.productDateOption = new FormControl("", []);
    this.productOption = new FormControl("", []);
    this.categoryOption = new FormControl("", []);
    this.stockOption = new FormControl("", []);

    this.productDateOption.setValue(this.productsDateOptions[0]);
    this.productOption.setValue(this.productsOptions[0]);
    this.categoryOption.setValue(this.categoryOptions[0].text);
    this.stockOption.setValue(this.stockOptions[0]);
    this.filterEmployees = this.employees;
    this.filterProducts = this.products;
    this.filterStocks = this.stocks;
    this.filterInvestors = this.investors;
  }

  ngOnInit() {
    this.navigation = this.route.queryParams.subscribe(data => {
      if (data['route'] === 'employee') {
        this.tabs[0].active = false;
        this.tabs[1].active = false;
        this.tabs[2].active = true;
        this.categoryOptions[0].active = false;
        this.categoryOptions[1].active = true;
        this.categoryOptions[2].active = false;
        this.categoryOption.setValue(this.categoryOptions[1].text);
      } else if (data['route'] === 'stock') {
        this.tabs[0].active = false;
        this.tabs[1].active = false;
        this.tabs[2].active = true;
      } else if (data['route'] === 'investor') {
        this.tabs[0].active = false;
        this.tabs[1].active = false;
        this.tabs[2].active = true;
        this.categoryOptions[0].active = false;
        this.categoryOptions[1].active = false;
        this.categoryOptions[2].active = true;
        this.categoryOption.setValue(this.categoryOptions[2].text);
      }
    });

    this.employees.forEach(employee => this.totalEmployeeSalary += employee.salary);
    this.investors.forEach(investor => this.investmentAmount += investor.amount);
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
    if (this.tabs[2].active && this.categoryOptions[0].active) {
      this.navigateTo("../add/stock");
      return;
    }
    if (this.tabs[2].active && this.categoryOptions[2].active) {
      this.navigateTo("../add/investor");
      return;
    }
    
    this.navigateTo("../add/employee");
  }

  onSelectDate(dateOption: string) {
    const currentDate = new Date();
    if (dateOption.toLowerCase() === 'all') {
      this.filterProducts = this.products;
    } else if (dateOption.toLowerCase() === 'day') {
      this.filterProducts = this.products.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getFullYear() === currentDate.getFullYear() &&
               itemDate.getMonth() === currentDate.getMonth() &&
               itemDate.getDate() === currentDate.getDate();
      });
    } else if (dateOption.toLowerCase() === 'week') {
      const firstDayOfWeek = new Date(currentDate);
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay());
      const lastDayOfWeek = new Date(currentDate);
      lastDayOfWeek.setDate(lastDayOfWeek.getDate() + (6 - lastDayOfWeek.getDay()));

      this.filterProducts = this.products.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= firstDayOfWeek && itemDate <= lastDayOfWeek;
      });
    } else if (dateOption.toLowerCase() === 'month') {
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      this.filterProducts = this.products.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= firstDayOfMonth && itemDate <= lastDayOfMonth;
      });
    } else if (dateOption.toLowerCase() === 'year') {
      const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
      const lastDayOfYear = new Date(currentDate.getFullYear(), 11, 31);

      this.filterProducts = this.products.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= firstDayOfYear && itemDate <= lastDayOfYear;
      });
    }
  }

  onSelectProduct(productOption: string) {
    if (productOption.toLowerCase() === 'all') {
      this.filterProducts = this.products;
      return;
    }
    this.filterProducts = this.products.filter(item => item.product === productOption);
  }

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
