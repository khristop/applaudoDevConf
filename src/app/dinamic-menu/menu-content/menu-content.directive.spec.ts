import { Injector } from '@angular/core';
import { MenuContentDirective } from './menu-content.directive';

describe('MenuContentDirective', () => {
  it('should create an instance', () => {
    const directive = new MenuContentDirective(null, {} as Injector);
    expect(directive).toBeTruthy();
  });
});
