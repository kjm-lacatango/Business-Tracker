import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CardBodyComponent } from '../../../shared/card-body/card-body.component';
import { IconsComponent } from '../../../shared/icons/icons.component';
import { CardHeaderComponent } from '../../../shared/card-header/card-header.component';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

interface Tab {
  text: string;
  active: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    IconsComponent,
    InputFieldComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isJustNow: boolean = true;
  messageCard: HTMLElement | undefined;
  @ViewChild('test') 
  set messageCardRef(ref: ElementRef | undefined) {
    if (ref) {
      this.messageCard = ref.nativeElement;
      if (this.tabs[1].active) {
        this.scrollToBottom();
      }
    }
  }

  productOptions: string[] = ["All", "Liquor", "Soft Drink", "Snack"];
  productItems: any[] = [
    {id: "1", product: "Liquor", item: "Alfonso", capital: "P 15,000", profit: "P 30,000"},
    {id: "2", product: "Liquor", item: "Beer", capital: "P 15,000", profit: "P 30,000"},
    {id: "3", product: "Soft Drinks", item: "Coke", capital: "P 10,000", profit: "P 30,000"},
    // {id: "1", product: "Liquor", item: "Alfonso", capital: "P 15,000", profit: "P 30,000"},
    // {id: "2", product: "Liquor", item: "Beer", capital: "P 15,000", profit: "P 30,000"},
    // {id: "3", product: "Soft Drinks", item: "Coke", capital: "P 10,000", profit: "P 30,000"},
    // {id: "1", product: "Liquor", item: "Alfonso", capital: "P 15,000", profit: "P 30,000"},
    // {id: "2", product: "Liquor", item: "Beer", capital: "P 15,000", profit: "P 30,000"},
    // {id: "3", product: "Soft Drinks", item: "Coke", capital: "P 10,000", profit: "P 30,000"},
    // {id: "1", product: "Liquor", item: "Alfonso", capital: "P 15,000", profit: "P 30,000"},
    // {id: "2", product: "Liquor", item: "Beer", capital: "P 15,000", profit: "P 30,000"},
    // {id: "3", product: "Soft Drinks", item: "Coke", capital: "P 10,000", profit: "P 30,000"},
    // {id: "1", product: "Liquor", item: "Alfonso", capital: "P 15,000", profit: "P 30,000"},
    // {id: "2", product: "Liquor", item: "Beer", capital: "P 15,000", profit: "P 30,000"},
    // {id: "3", product: "Soft Drinks", item: "Coke", capital: "P 10,000", profit: "P 30,000"},
    // {id: "1", product: "Liquor", item: "Alfonso", capital: "P 15,000", profit: "P 30,000"},
    // {id: "2", product: "Liquor", item: "Beer", capital: "P 15,000", profit: "P 30,000"},
  ];

  tabs: Tab[] = [
    { text: "Members", active: true},
    { text: "Chat Room", active: false},
    { text: "Notifications", active: false},
  ];

  members: any[] = [
    { id: "1", firstName: "Steve", lastName: "Doe", designation: "Admin", startedOn: new Date("2023-01-10")},
    { id: "2", firstName: "Lance", middleName: "L.", lastName: "Sigma", designation: "Assistant", startedOn: new Date("2023-01-10")},
    { id: "3", firstName: "Hans Dave", middleName: "DL.", lastName: "Smith", designation: "Assistant", startedOn: new Date("2023-01-10")},
    { id: "4", firstName: "Patrice Joy", middleName: "P.", lastName: "Jordan", designation: "Assistant", startedOn: new Date("2023-01-10")},
    { id: "5", firstName: "Kyle Dale", middleName: "T.", lastName: "Garcia", designation: "Assistant", startedOn: new Date("2023-01-10")},
  ];

  userMessages: any[] = [
    { id: "1", firstName: "Steve", lastName: "Doe", designation: "Assistant", message: "Sir the papers are gone.", createdAt: new Date("2024-04-16 12:00:30") },
    {id: "2", firstName: "Hans", lastName: "Smith", designation: "Admin", message: "What do you mean by 'gone'?", createdAt: new Date("2024-04-16 00:03:30")},
    {id: "3", firstName: "Steve", lastName: "Doe", designation: "Assistant", message: "I can't find it in any folders here. Can I ask John? He might know where it is.", createdAt: new Date("2024-04-16 00:01:30")},
    {id: "4", firstName: "Hans", lastName: "Smith", designation: "Admin", message: "Yes please.", createdAt: new Date("2024-04-16 00:02:30")},
    {id: "5", firstName: "Steve", lastName: "Doe", designation: "Assistant", message: "Ok sir, Thank you.", createdAt: new Date("2024-04-16 05:01:30")},
    {id: "6", firstName: "Steve", lastName: "Doe", designation: "Assistant", message: "I'll update you sir ASAP when I'm done.", createdAt: new Date("2024-04-16 01:04:30")},
  ];

  requestForAdmin: any[] = [
    {id: "1", firstName: "Alice", middleName: "Doe", lastName: "Smith", date: new Date("2024-04-16 12:01:30")},
    {id: "2", firstName: "Carl", lastName: "Smith", date: new Date("2024-04-03 12:04:30")},
    {id: "3", firstName: "Kyle", middleName: "Olive", lastName: "James", date: new Date("2024-03-12 12:04:30")},
  ];

  notifications: any[] = [
    {id: "1", status: "error", message: "Incorrect sales computation in item alfonso from Products"},
    {id: "1", status: "error", message: "Out of stock in item alfonso"},
    {id: "2", status: "warning", message: "Stock is running low in item beer"},
    {id: "3", status: "info", message: "New member added"},
    {id: "4", status: "info", message: "Added stock in item beer"},
  ];

  product: FormControl;
  message: FormControl;
  search: FormControl;

  constructor() {
    this.product = new FormControl("", []);
    this.message = new FormControl("", []);
    this.search = new FormControl("", []);

    this.product.setValue(this.productOptions[0]);
  }

  onSelectTab(selectedTab: Tab) {
    this.tabs.forEach(tab => tab.text === selectedTab.text ? tab.active = true : tab.active = false);
  }

  onDoubleClick(id: string, fromMember?: string) {
    if (fromMember) {
      alert("this should only work for admin |====| member id"+id);
      return;
    }
    alert("Want to delete? or update? wait there. Here's the id you've selected -> "+id);
  }

  scrollToBottom() {
    if (this.messageCard) {
      this.messageCard.scrollTop = this.messageCard.scrollHeight;
    }
  }

  formatTimeAgo(createdAt: Date): string | null {
    const currentTime = new Date();
    const timeDifference = (currentTime.getTime() - createdAt.getTime()) / 1000;

    const minutes = Math.floor(timeDifference / 60);
    if (minutes < 1) {
      return null;
    } else if (minutes === 1) {
      return "1 minute ago";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours === 1) {
      return "1 hour ago";
    } else if (hours < 24) {
      return `${hours} hours ago`;
    }

    const days = Math.floor(hours / 24);
    if (days === 1) {
      return '1 day ago';
    } else if (days < 30) {
      return `${days} days ago`;
    }

    const months = Math.floor(days / 30);
    if (months === 1) {
        return '1 month ago';
    } else if (months < 12) {
        return `${months} months ago`;
    }

    const years = Math.floor(months / 12);
    if (years === 1) {
      return "1 year ago";
    } else {
      return `${years} years ago`;
    }
  }
}
