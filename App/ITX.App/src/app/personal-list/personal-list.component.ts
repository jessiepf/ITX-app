import { Component } from '@angular/core';
import { PersonalInfo } from '../models/PersonalInfo';
import { PersonalServiceService } from '../service/personal-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.scss']
})
export class PersonalListComponent {

  personalInfos$!: Observable<PersonalInfo[]>

  constructor(public personalServiceService: PersonalServiceService) { }
  ngOnInit() {
    this.loadPersonalInfos();
  }
  // Get Personal Info list
  loadPersonalInfos() {
    this.personalInfos$ = this.personalServiceService.getAllPersonalInformation();
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.personalServiceService.deletePersonalInformation(id).subscribe(() => {
        this.loadPersonalInfos();
      })
    }
  }
}
