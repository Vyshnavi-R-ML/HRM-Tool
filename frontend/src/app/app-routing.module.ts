import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './sidebar/inbox/inbox.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthenticationComponent},
  { path: 'dashboard', component: SidebarComponent },
  { path: 'inbox', component: InboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
