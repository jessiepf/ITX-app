import { TestBed } from '@angular/core/testing';

import { PersonalServiceService } from './personal-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


describe('PersonalServiceService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: PersonalServiceService;
  let httpTestingController: HttpTestingController;
  let mockPersonalInfos = [
    {
      id: 1,
      firstName: 'Jessie',
      lastName: 'Furigay',
      emailAddress: 'jessie@gmail.com'
    },
    {
      id: 2,
      firstName: 'Jaycee Dillan',
      lastName: 'Furigay',
      emailAddress: 'Jaycee@gmail.com'
    },
    {
      id: 3,
      firstName: 'Rica',
      lastName: 'Guevarra',
      emailAddress: 'rica@gmail.com'
    },
  ];

  let mockPersonalInfo =
  {
    id: 1,
    firstName: 'Jessie',
    lastName: 'Furigay',
    emailAddress: 'jessie@gmail.com'
  };

  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      providers: [
        PersonalServiceService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ], imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PersonalServiceService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => { 
   httpTestingController.verify(); 
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll should make a GET HTTP request and return all data items', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockPersonalInfos));
    service.getAllPersonalInformation().subscribe({
      next: (personalInfos: any) => {
        expect(personalInfos).toEqual(mockPersonalInfos);
        done();
      },
      error: () => {
        done.fail;
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should make a GET HTTP request and return data by id', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockPersonalInfo));
    service.getPersonalInformationById(1).subscribe({
      next: (personalInfo: any) => {
        expect(personalInfo).toEqual(mockPersonalInfo);
        done();
      },
      error: () => {
        done.fail;
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should make a POST HTTP request and return true if success', (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(of(true));
    const mockAddPersonalInfo = { id: 0, firstName: 'Jessie 2', lastName: 'furigay', emailAddress: 'x@gmail.com', phoneNumber: '0912345678' };

    service.createPersonalInformation(mockAddPersonalInfo).subscribe({
      next: (res: any) => {
        expect(res).toEqual(true);
        done();
      },
      error: () => {
        done.fail;
      },
    });
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  });

  it('should make a UPDATE HTTP request and return true if success', (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(of(true));
    const mockUpdatePersonalInfo = { id: 0, firstName: 'Jessie 2', lastName: 'furigay', emailAddress: 'x@gmail.com', phoneNumber: '0912345678' };
    service.updatePersonalInformation(1, mockUpdatePersonalInfo).subscribe({
      next: (res: any) => {
        expect(res).toEqual(true);
        done();
      },
      error: () => {
        done.fail;
      },
    });
    expect(httpClientSpy.put).toHaveBeenCalledTimes(1);
  });

  it('should make a DELETE HTTP request and return true if success', (done: DoneFn) => {
    httpClientSpy.delete.and.returnValue(of(true));

    service.deletePersonalInformation(1).subscribe({
      next: (res: any) => {
        expect(res).toEqual(true);
        done();
      },
      error: () => {
        done.fail;
      },
    });
    expect(httpClientSpy.delete).toHaveBeenCalledTimes(1);
  });
});

