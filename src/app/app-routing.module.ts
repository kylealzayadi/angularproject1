import { homedir } from 'os';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {
  path:"Home",
  component:HomeComponent},
   
    {path:"Contacts",
    component:ContactsComponent},
    {path:"About",
    component:AboutComponent},
    
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
