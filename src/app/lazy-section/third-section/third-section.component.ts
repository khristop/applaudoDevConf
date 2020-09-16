import { Component, OnInit } from '@angular/core';
import { DINAMIC_MENU } from 'src/app/dinamic-menu.token';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss']
})
export class ThirdSectionComponent implements OnInit {
  public readonly dinamicMenuToken = DINAMIC_MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
