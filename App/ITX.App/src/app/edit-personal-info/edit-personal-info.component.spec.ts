import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { EditPersonalInfoComponent } from './edit-personal-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('EditPersonalInfoComponent', () => {
  let component: EditPersonalInfoComponent;
  let fixture: ComponentFixture<EditPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonalInfoComponent ],
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

  it(`should have as text 'Personal Information Form'`, (() => {
    expect(component.title).toEqual('Personal Information');
  }));

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
