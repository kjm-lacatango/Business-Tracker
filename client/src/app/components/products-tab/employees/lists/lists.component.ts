import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../../utils/interfaces';

@Component({
  selector: 'employee-lists',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class EmployeeListsComponent {
  totalEmployeeSalary: number = 0;

  employees: Employee[] = [
    {id: "1", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "2", isChecked: false, business: "Lubang's Best", firstName: "Kyle John", middleName: "De Los Reyes", lastName: "Love", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "3", isChecked: false, business: "KJM Sea Foods", firstName: "Lance Jacob", middleName: "Las Estes", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "4", isChecked: false, business: "KJM Sea Foods", firstName: "Lawrence", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "5", isChecked: false, business: "KJM Sea Foods", firstName: "Stephen Lance", middleName: "Lorem", lastName: "Smith", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "6", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "7", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "8", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
    {id: "9", isChecked: false, business: "R & L Cafe", firstName: "Steve", lastName: "Doe", age: 28, sex: "Male", startedAt: new Date("04/01/2022"), position: "Crew", salary: 18000},
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.employees.forEach(employee => this.totalEmployeeSalary += employee.salary);
  }

  onSelect(e: any) {}

  edit(id: string) {
    this.navigateTo(`../update/employee/${id}`);
  }

  navigateTo(route: string) {
    this.router.navigate([route], {relativeTo: this.route});
  }

  getMiddleInitial(middleName?: string) {
    if (!middleName) return;

    const initials = middleName?.split(' ').map(part => part.charAt(0).toUpperCase()).join('');
    return initials + '.';
  }
}
