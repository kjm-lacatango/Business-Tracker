import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-body.component.html',
  styleUrl: './card-body.component.scss'
})
export class CardBodyComponent {
  @Input() padding = "0rem";
  @Input() px: string | null = null;
  @Input() py: string | null = null;
  @Input() pt!: string;
  @Input() pb!: string;
  @Input() pr!: string;
  @Input() pl!: string;
  @Input() height: string = "21rem";
}
