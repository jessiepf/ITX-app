import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info.component';
import { BrowserModule, By } from '@angular/platform-browser';
describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'Personal Information Form'`, (() => {
    expect(component.text).toEqual('Personal Information');
  }));

  it(`should set submitted to true`, (() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, (() => {
    const editSpy = spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(editSpy).toHaveBeenCalled();
  }));

  it(`form should be invalid`,  (() => {
    component.personalInfoForm.controls['email'].setValue('');
    component.personalInfoForm.controls['firstName'].setValue('');
    component.personalInfoForm.controls['lastName'].setValue('');
    component.personalInfoForm.controls['phone'].setValue('');
    expect(component.personalInfoForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, (() => {
    component.personalInfoForm.controls['email'].setValue('jessie@asd.com');
    component.personalInfoForm.controls['firstName'].setValue('Jessie');
    component.personalInfoForm.controls['lastName'].setValue('furigay');
    component.personalInfoForm.controls['phone'].setValue('te1234567890');
    expect(component.personalInfoForm.valid).toBeTruthy();
  }));
});
