import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  @Input({ required: true }) type!: string;
  @Input() width: string = "28";
  @Input() height: string = "28";
  @Input() color: string = "rgb(6, 165, 6)";
  @Input() hoverColor!: string;
  @ViewChild("icon") svg!: ElementRef<SVGElement>;
  @Input() cursor: string = "pointer";

  ngAfterViewInit() {
    this.svg.nativeElement.setAttribute("height", this.height);
    this.svg.nativeElement.setAttribute("width", this.width);
    this.setColor(this.color);
  }

  setColor(fill: string) {
    if (this.svg.nativeElement) {
      const paths: any = this.svg.nativeElement.getElementsByTagName("path");
      for (const item of paths) {
        item.setAttribute("fill", fill);
      }
    }
  }

  onEnter() {
    this.setColor(this.hoverColor ? this.hoverColor : this.color);
  }

  onLeave() {
    this.setColor(this.color);
  }
}
