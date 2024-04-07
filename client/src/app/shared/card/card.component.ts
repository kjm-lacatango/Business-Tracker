import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() pt !: string;
  @Input() pl !: string;
  @Input() pr !: string;
  @Input() pb !: string;
  @Input() px: string | null = null;
  @Input() py: string | null = null;
  @Input() padding = '0rem'
}
