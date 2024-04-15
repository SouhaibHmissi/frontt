import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ModifierchefComponent } from './Components/interface_admin/modifieruser/modifierchef.component';
import { LoginComponent } from './Components/login/login.component';
import { DemandecongeComponent } from './Components/interface_employe/demandeconge/demandeconge.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { AffichercongesComponent } from './Components/interface_chef/afficherconges/afficherconges.component';
import { GererUsersComponent } from './Components/interface_admin/gerer-users/gerer-users.component';
import { SupprimerchefComponent } from './Components/interface_admin/supprimeruser/supprimerchef.component';
import { AjouteruserComponent } from './Components/interface_admin/ajouteruser/ajouteruser.component';
import { AfficherchefsComponent } from './Components/interface_admin/afficherusers/afficherchefs.component';
import { AfficheremployesComponent } from './Components/interface_admin/afficherusers/afficheremployes/afficheremployes.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { DashboardLayoutComponent } from './Components/dashboard-layout/dashboard-layout.component';
import { ChatComponent } from './Components/chat/chat.component';

const routes: Routes = [{
  path: "home", component: HomeComponent

}, {
  path: "login", component: LoginComponent

}
  ,
{
  path: 'compte',
  component: DashboardLayoutComponent,
  children: [{
    path: "admin/afficherchefs", component: AfficherchefsComponent
  }, {
    path: "admin/afficheremployes", component: AfficheremployesComponent
  }, {
    path: "admin/supprimeruser/:id", component: SupprimerchefComponent

  }, {
    path: "admin/ajouteruser", component: AjouteruserComponent

  }, {
    path: "admin/afficheruser/:id", component: ModifierchefComponent

  }, {
    path: "employe/ajouterconge", component: DemandecongeComponent

  }, {
    path: "employe/affichernotification", component: NotificationComponent

  }, {
    path: "admin/afficherconges", component: AffichercongesComponent

  }, {
    path: "chef/refuserconge", component: AffichercongesComponent
  }, {
    path: "admin/gererusers", component: GererUsersComponent
  }, {
    path: "admin/calendrier", component: CalendarComponent
  }
  , {
    path: "messages", component: ChatComponent
  }
  ]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
