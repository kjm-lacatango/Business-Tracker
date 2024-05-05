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
import { ActivitiesService } from '../../../../services/activities.service';
import { Subscription } from 'rxjs';

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
  protected activityEventSub = new Subscription();
  isCheckAll: boolean = false;
  isDelete: boolean = false;
  selectedDateOption: string = 'All';

  dateOptions: string[] = ["All", "Week", "Month", "Year"];
  filterActivities: Activity[] = [];
  filterOnProduct: Activity[] = [];

  search: FormControl;
  searchByDate: FormControl;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private activity: ActivitiesService
  ) {
    this.search = new FormControl("", []);
    this.searchByDate = new FormControl("", []);
    this.searchByDate.setValue(this.dateOptions[0]);
  }

  ngOnInit() {
    this.activity.getAll();

    this.activityEventSub = this.activity.events.subscribe(event => {
      if (!event) return;

      if (event === "GetActivities") {
        this.filterActivities = this.activity.values.sort((a, b) => a.updatedOn < b.updatedOn ? 1 : a.updatedOn > b.updatedOn ? -1 : 0);
      }
    });
  }

  ngOnDestroy() {
    this.activityEventSub.unsubscribe();
  }

  add() {
    this.navigateTo("../add");
  }

  edit(activity: Activity) {
    this.navigateTo(`../update/${activity.id}`);
  }

  onDelete() {
    this.filterActivities = this.activity.values.filter(act => !act.isChecked)
  }

  onEnterSearch() {
    if (this.search.value.trim()) {
      this.filterOnProduct = this.activity.values.filter(activity => activity.product.toLowerCase().includes(this.search.value.toLowerCase()));
      this.filterActivities = this.filterOnProduct;
    }
  }

  onInputSearch() {
    if (this.search.dirty && !this.search.value) {
      this.filterOnProduct = [];
      this.filterActivities = this.activity.values;
      this.searchByDate.setValue(this.dateOptions[0]);
    }
  }

  onSelect(optionSelected: string) {
    this.selectedDateOption = optionSelected;
    const today = new Date();

    switch (optionSelected.toLowerCase()) {
      case 'week':
        const oneWeekAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
        const searchDataForWeek = this.search.value && this.filterOnProduct ? this.filterOnProduct : this.activity.values;
        this.filterActivities = searchDataForWeek.filter(item => item.updatedOn >= oneWeekAgo);
        break;
      case 'month':
        const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        const searchDataForMonth = this.search.value && this.filterOnProduct ? this.filterOnProduct : this.activity.values;
        this.filterActivities = searchDataForMonth.filter(item => item.updatedOn >= oneMonthAgo);
        break;
      case 'year':
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        const searchDataForYear = this.search.value && this.filterOnProduct ? this.filterOnProduct : this.activity.values;
        this.filterActivities = searchDataForYear.filter(item => item.updatedOn >= oneYearAgo);
        break;
      case 'all':
        this.filterActivities = this.search.value && this.filterOnProduct ? this.filterOnProduct : this.activity.values;
        break;
    }
  }

  onChecked(id?: string) {
    if (!id) {
      this.isCheckAll = !this.isCheckAll;
      this.activity.values.forEach(activity => activity.isChecked = this.isCheckAll);
    }

    this.activity.values.map(activity => {
      if (activity.id === id)  {
        activity.isChecked = !activity.isChecked;
      }
    })

    const checked = this.activity.values.some(val => val.isChecked);
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
