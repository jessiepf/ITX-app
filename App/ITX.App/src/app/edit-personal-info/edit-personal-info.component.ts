import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalServiceService } from '../service/personal-service.service';
import { PersonalInfo } from '../models/PersonalInfo';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-personal-info',
  templateUrl: './edit-personal-info.component.html',
  styleUrls: ['./edit-personal-info.component.scss']
})
export class EditPersonalInfoComponent {

  id = this.actRoute.snapshot.params['id'];
  personalInfo$!: Observable<PersonalInfo>

  personalInfo: PersonalInfo = {
    id: 0,
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
  };
  
  personalInfoForm!: FormGroup;

  constructor(
    public actRoute: ActivatedRoute,
    public router: Router,
    public personalServiceService: PersonalServiceService
  ) { }

  ngOnInit() {
    this.createForm();
    this.personalInfo$ = this.personalServiceService.getPersonalInformationById(this.id);
    this.personalInfo$.subscribe((data) => {
      this.personalInfoForm.patchValue({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
      })
    })
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

    this.personalInfo.id = this.id;
    this.personalInfo.firstName = this.personalInfoForm.value.firstName;
    this.personalInfo.lastName = this.personalInfoForm.value.lastName;
    this.personalInfo.emailAddress = this.personalInfoForm.value.emailAddress;
    this.personalInfo.phoneNumber = this.personalInfoForm.value.phoneNumber;

    this.personalServiceService.updatePersonalInformation(this.id, this.personalInfo).subscribe(() => {
      this.router.navigate(['/personal-list'])
    })
  }
}
