import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CardBodyComponent } from '../../../../shared/card-body/card-body.component';
import { InputFieldComponent } from '../../../../shared/input-field/input-field.component';
import { IconsComponent } from '../../../../shared/icons/icons.component';
import { CardHeaderComponent } from '../../../../shared/card-header/card-header.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-investor',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    InputFieldComponent,
    IconsComponent
  ],
  templateUrl: './investor.component.html',
  styleUrl: './investor.component.scss'
})
export class InvestorComponent {
  investmentId: string | null = null;
  isEditAmount: boolean = false;

  form: FormGroup;
  name: FormControl;
  totalMoney: FormControl;
  amount: FormControl;
  getAmount: FormControl;
  date: FormControl;
  note: FormControl;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.name = new FormControl("", []);
    this.totalMoney = new FormControl("", []);
    this.amount = new FormControl("", []);
    this.getAmount = new FormControl("", [Validators.required]);
    this.date = new FormControl(new Date().toISOString().substring(0, 10), []);
    this.note = new FormControl("", []);
    this.form = this.fb.group({
      name: this.name,
      amount: this.amount,
      date: this.date,
      note: this.note
    })

    this.totalMoney.disable();
    this.totalMoney.setValue(25000);
  }

  ngOnInit() {
    this.investmentId = this.route.snapshot.paramMap.get("id");
  }

  back() {
    if (this.investmentId) {
      this.navigateTo("../../../");
      return;
    }

    this.navigateTo("../../");
  }

  onSaveAmount() {
    if (this.isEditAmount) {
      this.isEditAmount = false;
      return;
    }

    this.isEditAmount = true;
  }

  onSave() {}

  navigateTo(route: string) {
    this.router.navigate([route], { relativeTo: this.route, queryParams: {route: 'investor'} });
  }
}
