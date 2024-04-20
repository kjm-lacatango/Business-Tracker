import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconsComponent } from '../../../../shared/icons/icons.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'stock-lists',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class StockListsComponent {
  // stocks: any[] = [
  //   {id: "1", isChecked: false, name: "Steve Doe", product: "Liquor", item: "Alfonso", stocks: 500, cost: 15000, createdOn: new Date("2023-12-10")},
  //   {id: "2", isChecked: false, name: "Patrice Joy P. Jordan", product: "Liquor", item: "Beer", stocks: 5000, cost: 15000, createdOn: new Date("2024-04-10")},
  //   {id: "3", isChecked: false, name: "Hans L. Smith", product: "Liquor", item: "Gin", stocks: 2000, cost: 15000, createdOn: new Date("2024-04-10")},
  //   {id: "4", isChecked: false, name: "Patrice Joy P. Jordan", product: "Coffee", item: "Caramel", stocks: 1000, cost: 15000, createdOn: new Date("2024-04-10")},
  //   {id: "5", isChecked: false, name: "Clyde Joseph T. Poland", product: "Fruit Tea", item: "Avocado", stocks: 1500, cost: 15000, createdOn: new Date("2024-04-10")},
  //   {id: "6", isChecked: false, name: "Clyde Joseph T. Poland", product: "Fruit Tea", item: "Apple", stocks: 1000, cost: 15000, createdOn: new Date("2024-04-10")},
  // ];
  @Input() stocks: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onUpdate(id: string) {
    this.router.navigate([`../update/stock/${id}`], { relativeTo: this.route });
  }
}
