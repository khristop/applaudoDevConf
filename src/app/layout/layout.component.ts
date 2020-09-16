import { Component } from '@angular/core';
import { DINAMIC_MENU } from '../dinamic-menu.token';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public readonly dinamicMenuToken = DINAMIC_MENU;
  constructor() {}
}
