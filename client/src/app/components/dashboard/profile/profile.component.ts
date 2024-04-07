import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../shared/card-body/card-body.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
