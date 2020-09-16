import { Component, OnInit } from '@angular/core';
import { DINAMIC_MENU } from '../tokens/dinamic-menu.token';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {
  public readonly dinamicMenuToken = DINAMIC_MENU;
  constructor() { }

  ngOnInit(): void {
  }

}
