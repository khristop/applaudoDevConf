import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DINAMIC_MENU } from './dinamic-menu.token';
import { BehaviorSubject } from 'rxjs';
import { DinamicSectionModule } from './dinamic-menu/dinamic-section.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FirstSectionComponent,
    SecondSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // Menu module
    DinamicSectionModule
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: DINAMIC_MENU, useValue: new BehaviorSubject(null) }]
})
export class AppModule { }
