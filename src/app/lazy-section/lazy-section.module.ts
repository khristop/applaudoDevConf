import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazySectionRoutingModule } from './lazy-section-routing.module';
import { ThirdSectionComponent } from './third-section/third-section.component';


@NgModule({
  declarations: [ThirdSectionComponent],
  imports: [
    CommonModule,
    LazySectionRoutingModule
  ]
})
export class LazySectionModule { }
