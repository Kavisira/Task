import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field.component';
export interface FieldConfig {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  options?: string[];
  validation?: {
    pattern?: string;
    message?: string;
  };
  conditional?: {
    field: string;
    value: any;
  };
}

@Component({
  selector: 'app-dynamic-form',
  imports: [ CommonModule, ReactiveFormsModule, DynamicFieldComponent ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'
  ]
})
export class DynamicFormComponent implements OnInit {
  @Input() schema!: any;
  form!: FormGroup;
  submitted = false;
  submittedData: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const group: any = {};
    this.schema.fields.forEach((field: FieldConfig) => {
      const validators = [];
      if (field.required) validators.push(Validators.required);
      if (field.validation?.pattern) validators.push(Validators.pattern(field.validation.pattern));
      group[field.name] = [null, validators];
    });
    this.form = this.fb.group(group);
  }

  isFieldVisible(field: FieldConfig) {
    if (!field.conditional) return true;
    const value = this.form.get(field.conditional.field)?.value;
    return value === field.conditional.value;
  }

  onSubmit() {
    this.submitted = true;
    this.submittedData = this.form.value;
    console.log('Form Data:', this.form.value);
  }
}
