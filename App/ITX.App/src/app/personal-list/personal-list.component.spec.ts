import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalListComponent } from './personal-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PersonalListComponent', () => {
  let component: PersonalListComponent;
  let fixture: ComponentFixture<PersonalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalListComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
