import { Directive, InjectionToken, Injector, Input, OnDestroy, Optional, Self, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appMenuContainer]',
})
export class MenuContainerDirective implements OnDestroy {
  containerSubject: Subject<ViewContainerRef>;

  constructor(
    private viewContainer: ViewContainerRef,
    private injector: Injector,
    ) {}

  ngOnDestroy() {
    if (this.containerSubject) {
      this.containerSubject.next(null);
    }
  }

  @Input() set appMenuContainer(containerToken: InjectionToken<BehaviorSubject<ViewContainerRef>>) {
    if (this.containerSubject) {
      this.containerSubject.next(null);
    }

    this.containerSubject = this.injector.get(containerToken);
    this.containerSubject.next(this.viewContainer);
  }
}
