import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../utils/interfaces';
import { IconsComponent } from '../../../../shared/icons/icons.component';

@Component({
  selector: 'product-lists',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ProductListsComponent {
  @Input() product !: Product;
  @Output() onCheck = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) {}

  edit(id: string) {
    this.navigateTo(`../update/product/${id}`);
  }

  onChange(id: string) {
    this.onCheck.emit(id);
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

  getMiddleInitial(middleName?: string) {
    if (!middleName) return;

    const initials = middleName.split(' ').map(part => part.charAt(0).toUpperCase()).join('');
    return initials + ".";
  }
}
