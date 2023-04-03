import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InboxComponent } from './sidebar/inbox/inbox.component';
import { EmployeeComponent } from './sidebar/employee/employee.component';
import { CalendarComponent } from './sidebar/calendar/calendar.component';
import { CalendarService } from './calendar.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    SidebarComponent,
    InboxComponent,
    EmployeeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
