import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'card-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  @HostBinding("style.top") _top = '0rem';
  @HostBinding("style.position") pos = "static";

  @Input() padding = "0rem";
  @Input() px: string | null = null;
  @Input() py: string | null = null;
  @Input() pt!: string;
  @Input() pb!: string;
  @Input() pr!: string;
  @Input() pl!: string;
  @Input() position = "";
  @Input() top: string | null = null;
  @Input() set sticky(value: boolean) {
    if (value) {
      this._top = this.top ? this.top : '0rem';
      this.pos = "sticky"
    }
  }
}
