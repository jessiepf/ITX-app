import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalListComponent } from './personal-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PersonalInfo } from '../models/PersonalInfo';
import {  Observable, empty, of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PersonalServiceService } from '../service/personal-service.service';

describe('PersonalListComponent', () => {
  let component: PersonalListComponent;
  let fixture: ComponentFixture<PersonalListComponent>;
  let service: PersonalServiceService;

  let personalInfos: PersonalInfo[] = [
    { id: 1, firstName: 'Jessie', lastName: 'Furigay', emailAddress: 'jessie@gmail.com', phoneNumber: '0000000000' },
    { id: 2, firstName: 'Jaycee', lastName: 'Furigay', emailAddress: 'jaycee@gmail.com', phoneNumber: '111111111' },
    { id: 1, firstName: 'Rica', lastName: 'Furigay', emailAddress: 'rica@gmail.com', phoneNumber: '222222222' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalListComponent ],
      imports: [
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    service = TestBed.inject(PersonalServiceService);
    fixture = TestBed.createComponent(PersonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table ', (done) => {

    component.personalInfos$ = of(personalInfos);
    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      let tableRows = fixture.nativeElement.querySelectorAll('tr');
      expect(tableRows.length).toBe(4);

      // Header row
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('First Name');
      expect(headerRow.cells[1].innerHTML).toBe('Last Name');
      expect(headerRow.cells[2].innerHTML).toBe('Email');
      expect(headerRow.cells[3].innerHTML).toBe('Phone');

      // // Data rows
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe('Jessie');
      expect(row1.cells[1].innerHTML).toBe('Furigay');
      expect(row1.cells[2].innerHTML).toBe('jessie@gmail.com');
      expect(row1.cells[3].innerHTML).toBe('0000000000');
      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe('Jaycee');
      expect(row2.cells[1].innerHTML).toBe('Furigay');
      expect(row2.cells[2].innerHTML).toBe('jaycee@gmail.com');
      expect(row2.cells[3].innerHTML).toBe('111111111');
      let row3 = tableRows[3];
      expect(row3.cells[0].innerHTML).toBe('Rica');
      expect(row3.cells[1].innerHTML).toBe('Furigay');
      expect(row3.cells[2].innerHTML).toBe('rica@gmail.com');
      expect(row3.cells[3].innerHTML).toBe('222222222');

      done();
    });
  });

  it(`should call the delete method`, (() => {
    spyOn(window, 'confirm').and.returnValue(true);
    const editSpy = spyOn(service, 'deletePersonalInformation').and.callThrough();
    component.delete(1);
    expect(editSpy).toHaveBeenCalled();
  }));
});
