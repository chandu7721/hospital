import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CRUDService } from './curd.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DoctorsComponent } from './doctors/doctors.component';
import { TermsComponent } from './terms/terms.component';
import { MissionComponent } from './mission/mission.component';
import { MainComponent } from './main/main.component';
import { AppointComponent } from './appoint/appoint.component';
import { ReadComponent } from './read/read.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
   
    DoctorsComponent,
    TermsComponent,
    MissionComponent,
    MainComponent,
    AppointComponent,
    ReadComponent,
    TestComponent,
    UpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
