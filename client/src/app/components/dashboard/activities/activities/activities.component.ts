import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { CardFooterComponent } from '../../../../shared/card-footer/card-footer.component';
import { ActivatedRoute, Router } from '@angular/router';

interface Activity {
  id: string;
  isChecked: boolean;
  firstName: string;
  lastName: string;
  date: Date;
  noOfCups: number;
  sales: number;
  product: string;
  note?: string;
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  isCheckAll: boolean = false;
  isDelete: boolean = false;

  activities: Activity[] = [
    {id: '1', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha", note: "This is a note from keannu"},
    {id: '2', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '3', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '4', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '5', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '6', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '7', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '8', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '9', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '10', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '11', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '12', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '13', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '14', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '15', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '16', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '17', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
    {id: '18', isChecked: false, firstName: "Steve", lastName: "Doe", date: new Date('05/11/2024'), noOfCups: 127, sales: 14000, product: "Mocha"},
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  add() {
    this.navigateTo("../add");
  }

  edit(activity: Activity) {
    this.navigateTo(`../update/${activity.id}`);
  }

  onDelete() {
    this.activities.forEach(activity => activity.isChecked && console.log(activity.id));
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
}
