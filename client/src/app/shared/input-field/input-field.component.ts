import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputValidations } from '../../utils/interfaces';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  @Input({ required: true }) control!: FormControl;
  @Input() type: string = "text";
  @Input() label!: string;
  @Input() placeholder: string = "";
  @Input() validations: InputValidations[] = [];
  @Input() autoComplete: string = "off";
  @Input() options!: string[];
  @Input() optionFontSize!: string;
  @Input() pl!: string;
  @Input() cols: string = '3';
  @Input() rows: string = '3';
  @Input() width!: string;
  @Input() mt!: string;
  @Output() onSelect = new EventEmitter();
  @Output() onEnterSearch = new EventEmitter();
  @Output() onInputSearch = new EventEmitter();

  onChange(event: any) {
    this.onSelect.emit(event.target.value);
  }

  onEnter() {
    this.onEnterSearch.emit();
  }

  onInput() {
    this.onInputSearch.emit();
  }
}
