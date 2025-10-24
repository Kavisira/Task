import { Component } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dynamic-form';
   userFormSchema = {
    title: 'User Registration',
    fields: [
      { label: 'Full Name', name: 'fullName', type: 'text', required: true },
      { label: 'Email', name: 'email', type: 'text', required: true, validation: { pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$', message: 'Invalid email address' }},
      { label: 'Gender', name: 'gender', type: 'dropdown', options: ['Male', 'Female', 'Other'], required: true },
      { label: 'Subscribe to newsletter', name: 'subscribe', type: 'checkbox' },
      { label: 'About Yourself', name: 'about', type: 'textarea' },
    ]
  };

}
