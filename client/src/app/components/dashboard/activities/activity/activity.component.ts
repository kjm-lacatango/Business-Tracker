import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  activityId: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.activityId = this.route.snapshot.paramMap.get('id');
  }

  back() {
    if (this.activityId) {
      this.navigateTo('../../');
      return;
    }

    this.navigateTo('../');
  }

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
