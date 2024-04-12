import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { CardFooterComponent } from '../../../../shared/card-footer/card-footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../../../../utils/interfaces';
import { InputFieldComponent } from '../../../../shared/input-field/input-field.component';
import { IconsComponent } from '../../../../shared/icons/icons.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    InputFieldComponent,
    IconsComponent
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  isCheckAll: boolean = false;
  isDelete: boolean = false;
  selectedDateOption: string = 'All';

  dateOptions: string[] = ["All", "Week", "Month", "Year"];
  filterActivities: Activity[] = [];
  filterOnProduct: Activity[] = [];

  activities: Activity[] = [
    {id: '1', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-04-12'), noOfCups: 127, sales: 14000, product: "Ice Tea", note: "This is a note from keannu"},
    {id: '2', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2022-03-20'), noOfCups: 127, sales: 14000, product: "Ice Tea"},
    {id: '3', isChecked: false, firstName: "Steve", middleName: "de lara", lastName: "Doe", date: new Date('2024-04-12'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '4', isChecked: false, firstName: "Steve", middleName: "de los santos", lastName: "Doe", date: new Date('2024-04-12'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '5', isChecked: false, firstName: "Steve", middleName: "Torregoza", lastName: "Doe", date: new Date('2024-04-12'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '6', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2023-12-21'), noOfCups: 127, sales: 14000, product: "Coffee"},
    {id: '7', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2022-11-11'), noOfCups: 127, sales: 14000, product: "Coffee"},
    {id: '8', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2020-11-05'), noOfCups: 127, sales: 14000, product: "Coffee"},
    {id: '9', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-01-12'), noOfCups: 127, sales: 14000, product: "Coffee"},
    {id: '10', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-02-22'), noOfCups: 127, sales: 14000, product: "Coffee"},
    {id: '11', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-03-12'), noOfCups: 127, sales: 14000, product: "Fruit Tea"},
    {id: '12', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-04-12'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '13', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-01-12'), noOfCups: 127, sales: 14000, product: "Fruit Tea"},
    {id: '14', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-02-12'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '15', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-03-12'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '16', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-04-12'), noOfCups: 127, sales: 14000, product: "Fruit Tea"},
    {id: '17', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-01-12'), noOfCups: 127, sales: 14000, product: "Fruit Tea"},
    {id: '18', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('2024-02-12'), noOfCups: 127, sales: 14000, product: "Fruit Tea"},
  ];

  search: FormControl;
  searchByDate: FormControl;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.search = new FormControl("", []);
    this.searchByDate = new FormControl("", []);

    this.filterActivities = this.activities;
    this.searchByDate.setValue(this.dateOptions[0]);
  }

  add() {
    this.navigateTo("../add");
  }

  edit(activity: Activity) {
    this.navigateTo(`../update/${activity.id}`);
  }

  onDelete() {
    this.filterActivities.forEach(activity => activity.isChecked && console.log(activity.id));
  }

  onEnterSearch() {
    this.filterOnProduct = this.filterActivities.filter(activity => activity.product.toLowerCase().includes(this.search.value.toLowerCase()));
    this.filterActivities = this.filterOnProduct;
  }

  onInputSearch() {
    if (this.search.dirty && !this.search.value) {
      this.filterOnProduct = [];
      this.searchByDate.setValue(this.dateOptions.find(date => date === this.selectedDateOption));
      this.onSelect(this.selectedDateOption);
    }
  }

  onSelect(optionSelected: string) {
    this.selectedDateOption = optionSelected;
    const today = new Date();

    switch (optionSelected.toLowerCase()) {
      case 'week':
        const oneWeekAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
        if (this.search.value && this.filterOnProduct) {
          this.filterActivities = this.filterOnProduct.filter(item => item.date >= oneWeekAgo);
        } else {
          this.filterActivities = this.activities.filter(item => item.date >= oneWeekAgo);
        }
        break;
      case 'month':
        const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        if (this.search.value && this.filterOnProduct) {
          this.filterActivities = this.filterOnProduct.filter(item => item.date >= oneMonthAgo);
        } else {
          this.filterActivities = this.activities.filter(item => item.date >= oneMonthAgo);
        }
        break;
      case 'year':
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        if (this.search.value && this.filterOnProduct) {
          this.filterActivities = this.filterOnProduct.filter(item => item.date >= oneYearAgo);
        } else {
          this.filterActivities = this.activities.filter(item => item.date >= oneYearAgo);
        }
        break;
      case 'all':
        if (this.search.value && this.filterOnProduct) {
          this.filterActivities = this.filterOnProduct;
        } else {
          this.filterActivities = this.activities;
        }
        break;
    }
  }

  onChecked(id?: string) {
    if (!id) {
      this.isCheckAll = !this.isCheckAll;
      this.activities.forEach(activity => activity.isChecked = this.isCheckAll);
    }

    this.activities.map(activity => {
      if (activity.id === id)  {
        activity.isChecked = !activity.isChecked;
      }
    })

    const checked = this.activities.some(val => val.isChecked);
    if (checked) {
      this.isDelete = true;
    } else {
      this.isDelete = false;
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }

  getMiddleInitial(middleName?: string) {
    if (!middleName) return;

    const initials = middleName.split(' ').map(part => part.charAt(0).toUpperCase()).join('');
    return initials + ".";
  }
}
