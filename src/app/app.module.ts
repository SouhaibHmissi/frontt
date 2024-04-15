import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './Components/login/login.component';
import { ModifierchefComponent } from './Components/interface_admin/modifieruser/modifierchef.component';
import { DemandecongeComponent } from './Components/interface_employe/demandeconge/demandeconge.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContentComponent } from './Components/content/content.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { AffichercongesComponent } from './Components/interface_chef/afficherconges/afficherconges.component';
import { GererUsersComponent } from './Components/interface_admin/gerer-users/gerer-users.component';
import { SupprimerchefComponent } from './Components/interface_admin/supprimeruser/supprimerchef.component';
import { AjouteruserComponent } from './Components/interface_admin/ajouteruser/ajouteruser.component';
import { AfficherchefsComponent } from './Components/interface_admin/afficherusers/afficherchefs.component';
import { AfficheremployesComponent } from './Components/interface_admin/afficherusers/afficheremployes/afficheremployes.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';
import { ChatComponent } from './Components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
AfficherchefsComponent,
    SupprimerchefComponent,
    ModifierchefComponent,
    LoginComponent,
    DemandecongeComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    HomeComponent,
    ContentComponent,
    NotificationComponent,
    AffichercongesComponent,
    GererUsersComponent,
    AjouteruserComponent,
    AfficheremployesComponent,
    CalendarComponent,
    DashboardLayoutComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FullCalendarModule
    ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
