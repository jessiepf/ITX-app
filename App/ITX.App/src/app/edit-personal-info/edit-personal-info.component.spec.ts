import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { EditPersonalInfoComponent } from './edit-personal-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import {PersonalInfo} from './../models/PersonalInfo'
describe('EditPersonalInfoComponent', () => {
  let component: EditPersonalInfoComponent;
  let fixture: ComponentFixture<EditPersonalInfoComponent>;

  let mockPersonalInfo =
  {
    id: 1,
    firstName: 'Jessie',
    lastName: 'Furigay',
    emailAddress: 'jessie@gmail.com',
    phoneNumber: '11111111'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPersonalInfoComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(EditPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should call the onSubmit method`, (() => {
    const editSpy = spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(editSpy).toHaveBeenCalled();
  }));

  it(`form should be invalid`, (() => {
    component.personalInfoForm.controls['emailAddress'].setValue('');
    component.personalInfoForm.controls['firstName'].setValue('');
    component.personalInfoForm.controls['lastName'].setValue('');
    component.personalInfoForm.controls['phoneNumber'].setValue('');
    expect(component.personalInfoForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, (() => {
    component.personalInfoForm.controls['emailAddress'].setValue('jessie@asd.com');
    component.personalInfoForm.controls['firstName'].setValue('Jessie');
    component.personalInfoForm.controls['lastName'].setValue('furigay');
    component.personalInfoForm.controls['phoneNumber'].setValue('te1234567890');
    expect(component.personalInfoForm.valid).toBeTruthy();
  }));

  it(`form group should be a value`, (() => {

    component.personalInfoForm.patchValue({
      id: 1,
      firstName: 'Jessie',
      lastName: 'Furigay',
      emailAddress: 'jessie@gmail.com',
      phoneNumber: '1111111'
    });

    fixture.detectChanges();
    expect(component.personalInfoForm.controls['firstName'].value).toBe('Jessie');
    expect(component.personalInfoForm.controls['lastName'].value).toBe('Furigay');
    expect(component.personalInfoForm.controls['emailAddress'].value).toBe('jessie@gmail.com');
    expect(component.personalInfoForm.controls['phoneNumber'].value).toBe('1111111');
  }));

  it('should call all methods in ngOnInit', () => {
    spyOn(component.personalServiceService,'getPersonalInformationById')
            .and.returnValue(of(mockPersonalInfo));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.personalInfoForm.controls['firstName'].value).toBe('Jessie');
    expect(component.personalInfoForm.controls['lastName'].value).toBe('Furigay');
    expect(component.personalInfoForm.controls['emailAddress'].value).toBe('jessie@gmail.com');
    expect(component.personalInfoForm.controls['phoneNumber'].value).toBe('11111111');
  });

});
