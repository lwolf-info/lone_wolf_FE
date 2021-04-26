import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/sections/about/about.component';
import { ClassesComponent } from './components/sections/classes/classes.component';
import { PricingComponent } from './components/sections/pricing/pricing.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { ScheduleComponent } from './components/sections/schedule/schedule.component';
import { ContactComponent } from './components/sections/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component:  AboutComponent},
  { path: 'classes', component:  ClassesComponent},
  { path: 'pricing', component:  PricingComponent},
  { path: 'services', component:  ServicesComponent},
  { path: 'schedule', component:  ScheduleComponent},
  { path: 'contact', component:  ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
