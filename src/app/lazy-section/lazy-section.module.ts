import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazySectionRoutingModule } from './lazy-section-routing.module';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { DinamicSectionModule } from '../dinamic-menu/dinamic-section.module';


@NgModule({
  declarations: [ThirdSectionComponent],
  imports: [
    CommonModule,
    LazySectionRoutingModule,
    DinamicSectionModule
  ]
})
export class LazySectionModule { }
