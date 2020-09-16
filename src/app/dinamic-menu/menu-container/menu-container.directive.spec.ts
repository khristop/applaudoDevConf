import { Injector } from '@angular/core';
import { MenuContainerDirective } from './menu-container.directive';

describe('MenuContainerDirective', () => {
  it('should create an instance', () => {
    const directive = new MenuContainerDirective(null, {} as Injector);
    expect(directive).toBeTruthy();
  });
});
