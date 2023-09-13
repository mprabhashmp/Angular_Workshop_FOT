import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  user: any = {};
  successMessage: string | null = null; // Initialize the success message as null

  constructor(private registrationService: RegistrationService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Assuming you have a User class to represent the user data
      const user = {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        age: form.value.age,
        gender: form.value.gender,
        email: form.value.email,
      };

      // Call the service to register the user
      this.registrationService.registerUser(user).subscribe(
        (response) => {
          console.log('User registration successful', response);
          // Clear the form data after successful submission
          form.resetForm();
          this.successMessage = 'Registration successful!';

          // Reset the success message after a certain duration (e.g., 5 seconds)
          setTimeout(() => {
            this.successMessage = null;
          }, 2000);
        },
        (error) => {
          console.error('User registration failed', error);
          // Handle registration failure, display an error message, etc.
        }
      );
    } else {
      // Handle invalid form submission if needed
      console.error('Form is invalid. Please check the input fields.');
    }
  }
}
