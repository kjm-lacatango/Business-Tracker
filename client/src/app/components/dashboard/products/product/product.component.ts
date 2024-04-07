import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  productId: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get("id");
  }

  back() {
    if (this.productId) {
      this.navigateTo("../../");
      return;
    }

    this.navigateTo("../");
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }
}
