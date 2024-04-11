import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
