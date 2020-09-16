import { Injector } from '@angular/core';
import { SectionContainerDirective } from './section-container.directive';

describe('SectionContainerDirective', () => {
  it('should create an instance', () => {
    const directive = new SectionContainerDirective(null, {} as Injector);
    expect(directive).toBeTruthy();
  });
});
