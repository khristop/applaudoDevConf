import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuContentDirective } from './menu-content/menu-content.directive';
import { MenuContainerDirective } from './menu-container/menu-container.directive';
import { DINAMIC_MENU } from './dinamic-menu.token';
import { BehaviorSubject } from 'rxjs';


@NgModule({
  declarations: [MenuContentDirective, MenuContainerDirective],
  imports: [
    CommonModule
  ],
  exports: [ MenuContentDirective, MenuContainerDirective ],
  providers: [{ provide: DINAMIC_MENU, useValue: new BehaviorSubject(null) }]
})
export class DinamicMenuModule { }
