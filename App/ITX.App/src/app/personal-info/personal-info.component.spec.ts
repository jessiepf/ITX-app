import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoComponent);
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

  it(`form should be invalid`,  (() => {
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
});
