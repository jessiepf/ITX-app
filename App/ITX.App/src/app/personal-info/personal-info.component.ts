import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  text = 'Personal Information';

  personal = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  personalInfoForm!: FormGroup;
  submitted = false;

  constructor() {
    this.createForm();
  }

  createForm(): void {

    this.personalInfoForm = new FormGroup({
      'firstName': new FormControl(this.personal.firstName, [
        Validators.required,
      ]),
      'lastName': new FormControl(this.personal.lastName, [
        Validators.required,
      ]),
      'email': new FormControl(this.personal.email, [
        Validators.required,
        Validators.email
      ]),
      'phone': new FormControl(this.personal.phone, Validators.required)
    });

    // this.contactForm = new FormGroup({
    //     'name': new FormControl(this.contact.name, [
    //         Validators.required,
    //         Validators.minLength(4)
    //     ]),
    //     'email': new FormControl(this.contact.email, [
    //         Validators.required,
    //         Validators.email
    //     ]),
    //     'text': new FormControl(this.contact.text, Validators.required)
    // });
  }

  get personalInfoFormControl() {
    return this.personalInfoForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    console.warn(this.personalInfoForm.value);
    debugger;
  }
}


// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.sass']
// })
// export class PersonalInfoComponent {
//     text = 'contact page';
//     contactForm: FormGroup;
//     contact = {
//         name: '',
//         email: '',
//         text: ''
//     };
//     submitted = false;

//     constructor() {
//         this.createForm();
//     }

//     createForm(): void {
//         this.contactForm = new FormGroup({
//             'name': new FormControl(this.contact.name, [
//                 Validators.required,
//                 Validators.minLength(4)
//             ]),
//             'email': new FormControl(this.contact.email, [
//                 Validators.required,
//                 Validators.email
//             ]),
//             'text': new FormControl(this.contact.text, Validators.required)
//         });
//     }

//     onSubmit(): void {
//         this.submitted = true;
//     }
// }