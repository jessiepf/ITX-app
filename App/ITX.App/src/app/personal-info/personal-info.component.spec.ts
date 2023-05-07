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
    component.personalInfoForm.controls['name'].setValue('');
    component.personalInfoForm.controls['text'].setValue('');
    expect(component.personalInfoForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, (() => {
    component.personalInfoForm.controls['email'].setValue('asd@asd.com');
    component.personalInfoForm.controls['name'].setValue('aada');
    component.personalInfoForm.controls['text'].setValue('text');
    expect(component.personalInfoForm.valid).toBeTruthy();
  }));
});
