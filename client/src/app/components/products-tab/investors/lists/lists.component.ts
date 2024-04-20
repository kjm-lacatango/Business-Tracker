import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconsComponent } from '../../../../shared/icons/icons.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'investors-lists',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class InvestorsListsComponent {
  @Input() investors: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  edit(id: string) {
    this.router.navigate([`../update/investor/${id}`], { relativeTo: this.route });
  }
}
