import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class FormComponent {
  feedbackForm: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted', this.feedbackForm.value);
      this.successMessage = 'Form submitted successfully!';
      this.feedbackForm.reset(); 
    } else {
      console.log('Form is invalid');
    }
  }
}
