import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContainerDirective } from './section-container/section-container.directive';
import { SectionContentDirective } from './section-content/section-content.directive';

@NgModule({
  declarations: [SectionContentDirective, SectionContainerDirective],
  imports: [
    CommonModule
  ],
  exports: [ SectionContentDirective, SectionContainerDirective ],
})
export class DinamicSectionModule { }
