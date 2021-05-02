import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { AboutComponent } from './components/sections/about/about.component';
import { ClassesComponent } from './components/sections/classes/classes.component';
import { PricingComponent } from './components/sections/pricing/pricing.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { ScheduleComponent } from './components/sections/schedule/schedule.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { TestComponent } from './components/test/test.component';
import { CarouselComponent } from './components/carrusel/carousel.component';
import { ArticleComponent } from './components/article/article.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ClassesComponent,
    PricingComponent,
    ServicesComponent,
    ScheduleComponent,
    ContactComponent,
    TestComponent,
    CarouselComponent,
    ArticleComponent,
    PageLoaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
})
export class AppModule { }
