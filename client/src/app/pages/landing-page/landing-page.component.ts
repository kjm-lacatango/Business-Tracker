import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  login() {
    this.navigateTo("../login");
  }

  register() {
    this.navigateTo("../register");
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
