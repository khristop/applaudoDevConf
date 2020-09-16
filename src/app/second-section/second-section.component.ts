import { Component, OnInit } from '@angular/core';
import { DINAMIC_MENU } from '../dinamic-menu.token';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent implements OnInit {
  public readonly dinamicMenuToken = DINAMIC_MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
