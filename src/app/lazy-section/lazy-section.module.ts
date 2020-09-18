import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazySectionRoutingModule } from './lazy-section-routing.module';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { DinamicSectionModule } from '../dinamic-section/dinamic-section.module';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [ThirdSectionComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    LazySectionRoutingModule,
    DinamicSectionModule
  ]
})
export class LazySectionModule { }
