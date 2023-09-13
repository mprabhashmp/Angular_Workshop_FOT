import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"students",component:StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
