import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalListComponent } from './personal-list/personal-list.component';
import { EditPersonalInfoComponent } from './edit-personal-info/edit-personal-info.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContainerComponent } from './component/container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    PersonalListComponent,
    NavbarComponent,
    EditPersonalInfoComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {  }
