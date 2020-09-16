import { Directive, InjectionToken, Injector, Input, OnDestroy, Optional, Self, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appSectionContainer]',
})
export class SectionContainerDirective implements OnDestroy {
  containerSubject: Subject<ViewContainerRef>;

  constructor(
    private viewContainer: ViewContainerRef,
    private injector: Injector,
    ) {}

  ngOnDestroy() {
    if (this.containerSubject) {
      this.containerSubject.next(null);
      this.containerSubject.unsubscribe();
    }
  }

  @Input() set appSectionContainer(containerToken: InjectionToken<BehaviorSubject<ViewContainerRef>>) {
    if (this.containerSubject) {
      this.containerSubject.next(null);
    }

    this.containerSubject = this.injector.get(containerToken);
    this.containerSubject.next(this.viewContainer);
  }
}
