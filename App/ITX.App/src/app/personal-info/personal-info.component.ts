import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PersonalServiceService } from '../service/personal-service.service';
import { PersonalInfo } from '../models/PersonalInfo';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  title = 'Personal Information';

  personal = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  personalInfoForm!: FormGroup;
  submitted = false;

  constructor(public personalServiceService: PersonalServiceService) {
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
      'emailAddress': new FormControl(this.personal.email, [
        Validators.required,
        Validators.email
      ]),
      'phoneNumber': new FormControl(this.personal.phone, Validators.required)
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

    const personalInfo: PersonalInfo = {
      id: 0,
      firstName: this.personalInfoForm.value.firstName,
      lastName: this.personalInfoForm.value.lastName,
      emailAddress: this.personalInfoForm.value.emailAddress,
      phoneNumber: this.personalInfoForm.value.phoneNumber,
    };
debugger;
    this.personalServiceService.createPersonalInformation(personalInfo).subscribe( ()=> {
      debugger;
    })
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