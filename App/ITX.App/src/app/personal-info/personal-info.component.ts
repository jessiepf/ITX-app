import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonalServiceService } from '../service/personal-service.service';
import { PersonalInfo } from '../models/PersonalInfo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  personalInfo: PersonalInfo = {
    id: 0,
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
  };
  personalInfoForm!: FormGroup;

  constructor(public router: Router, public personalServiceService: PersonalServiceService) {
    this.createForm();
  }

  createForm(): void {

    this.personalInfoForm = new FormGroup({
      'firstName': new FormControl(this.personalInfo.firstName, [
        Validators.required,
      ]),
      'lastName': new FormControl(this.personalInfo.lastName, [
        Validators.required,
      ]),
      'emailAddress': new FormControl(this.personalInfo.emailAddress, [
        Validators.required,
        Validators.email
      ]),
      'phoneNumber': new FormControl(this.personalInfo.phoneNumber, Validators.required)
    });
  }

  get personalInfoFormControl() {
    return this.personalInfoForm.controls;
  }

  onSubmit(): void {

    this.personalInfo.firstName = this.personalInfoForm.value.firstName;
    this.personalInfo.lastName = this.personalInfoForm.value.lastName;
    this.personalInfo.emailAddress = this.personalInfoForm.value.emailAddress;
    this.personalInfo.phoneNumber = this.personalInfoForm.value.phoneNumber;

    this.personalServiceService.createPersonalInformation(this.personalInfo).subscribe((data) => {
      this.router.navigate(['/personal-list'])
    })
  }
}