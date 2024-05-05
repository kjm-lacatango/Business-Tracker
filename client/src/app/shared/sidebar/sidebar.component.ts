import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

interface Tab {
  label: string;
  isActive: boolean;
  route: string;
}

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private routerEvents = new Subscription();
  selectedRoute = "home";
  tabs: Tab[] = [
    {label: "Home", route: "home", isActive: false},
    {label: "Products", route: "products", isActive: false},
    {label: "Activities", route: "activities", isActive: false},
    {label: "Profile", route: "profile", isActive: false},
  ];

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private user: UserService
  ) {}

  ngOnInit() {
    this.routerEvents = this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.setActivateTab();
      }
    });

    this.setActivateTab();
  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe();
  }

  onLogout() {
    this.router.navigate(["/main"], { relativeTo: this.route });
  }

  selectTab(tab: Tab) {
    this.selectedRoute = tab.route;
    this.router.navigate([tab.route], {relativeTo: this.route});
  }

  setActivateTab() {
    this.selectedRoute = this.router.url.replace(/\/dashboard\/(\w+).*/, "$1");

    const isValidRoute = this.tabs.some(tab => tab.route === this.selectedRoute);

    if (!isValidRoute) {
      this.selectedRoute = "home";
    }

    this.activateTab(this.selectedRoute);
  }

  activateTab(route: string) {
    this.tabs.forEach(value => {
      if (value.route !== this.selectedRoute || !value.isActive) {
        value.isActive = value.route === route;
      } 
    });
  }
}
