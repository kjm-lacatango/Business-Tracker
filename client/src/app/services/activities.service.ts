import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Activity, ActivityEvent } from "../utils/interfaces";

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService extends BaseService<ActivityEvent, Activity> {
    constructor() {
        super()
    }

    getAll() {
        this.values = [
            {id: '1', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-04-12'), soldOut: 127, sales: 14000, product: "Milk Tea", note: "This is from branch 2"},
            {id: '2', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2022-03-20'), soldOut: 127, sales: 14000, product: "Milk Tea"},
            {id: '3', isChecked: false, firstName: "Charisse Joice", middleName: "de lara", lastName: "Jordan", updatedOn: new Date('2024-04-12'), soldOut: 127, sales: 14000, product: "Fruit Tea"},
            {id: '4', isChecked: false, firstName: "Renzel", middleName: "de los santos", lastName: "Avenue", updatedOn: new Date('2024-04-12'), soldOut: 127, sales: 14000, product: "Coffee"},
            {id: '5', isChecked: false, firstName: "Lance", middleName: "Torregoza", lastName: "Smith", updatedOn: new Date('2024-04-12'), soldOut: 127, sales: 14000, product: "Milk Tea"},
            {id: '6', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2023-12-21'), soldOut: 127, sales: 14000, product: "Coffee",  note: "This is from main branch"},
            {id: '7', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2022-11-11'), soldOut: 127, sales: 14000, product: "Coffee"},
            {id: '8', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2020-11-05'), soldOut: 127, sales: 14000, product: "Add Ons"},
            {id: '9', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-01-12'), soldOut: 127, sales: 14000, product: "Coffee"},
            {id: '10', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-02-22'), soldOut: 127, sales: 14000, product: "Coffee"},
            {id: '11', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-03-12'), soldOut: 127, sales: 14000, product: "Fruit Tea"},
            {id: '12', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-04-12'), soldOut: 127, sales: 14000, product: "Frappe"},
            {id: '13', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-01-22'), soldOut: 127, sales: 14000, product: "Fruit Tea"},
            {id: '14', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-04-27'), soldOut: 127, sales: 14000, product: "Frappe"},
            {id: '15', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-04-26'), soldOut: 127, sales: 14000, product: "Non-Coffee"},
            {id: '16', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-04-27'), soldOut: 127, sales: 14000, product: "Fruit Tea"},
            {id: '17', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-01-12'), soldOut: 127, sales: 14000, product: "Fruit Tea"},
            {id: '18', isChecked: false, firstName: "Steve", lastName: "Doe", updatedOn: new Date('2024-02-12'), soldOut: 127, sales: 14000, product: "Add Ons"},
        ];
        this._events.next("GetActivities");
    }
}