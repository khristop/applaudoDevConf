import { Injector } from '@angular/core';
import { SectionContentDirective } from './section-content.directive';

describe('SectionContentDirective', () => {
  it('should create an instance', () => {
    const directive = new SectionContentDirective(null, {} as Injector);
    expect(directive).toBeTruthy();
  });
});
