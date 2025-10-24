import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldConfig } from '../dynamic-form/dynamic-form.component';
@Component({
  selector: 'app-dynamic-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-field.component.html',
  styleUrl: './dynamic-field.component.css',
  standalone: true
})
export class DynamicFieldComponent {
  @Input() field!: FieldConfig;
  @Input() group!: FormGroup;
}