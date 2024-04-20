import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../../utils/interfaces';
import { IconsComponent } from '../../../../shared/icons/icons.component';

@Component({
  selector: 'employee-lists',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class EmployeeListsComponent {
  // totalEmployeeSalary: number = 0;

  @Input() employees: Employee[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.employees.forEach(employee => this.totalEmployeeSalary += employee.salary);
  // }

  // onSelect(e: any) {}

  edit(id: string) {
    this.navigateTo(`../update/employee/${id}`);
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

  getMiddleInitial(middleName?: string) {
    if (!middleName) return;

    const initials = middleName?.split(' ').map(val => val.charAt(0).toUpperCase()).join('');
    return initials + '.';
  }
}
