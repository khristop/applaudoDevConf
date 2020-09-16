import { Directive, InjectionToken, Injector, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Directive({
  selector: '[appMenuContent]'
})
export class MenuContentDirective implements OnDestroy {
  private lastContainerSubject: Subject<ViewContainerRef>;

  constructor(
    private viewContainer: ViewContainerRef,
    private injector: Injector,
    ) {}

  ngOnDestroy() {
    if (this.lastContainerSubject) {
      this.lastContainerSubject.next(null);
    }
  }

  @Input() set appMenuContent(containerToken: InjectionToken<BehaviorSubject<ViewContainerRef>>) {
    if (this.lastContainerSubject) {
      this.lastContainerSubject.next(null);
    }

    this.lastContainerSubject = this.injector.get(containerToken);
    this.lastContainerSubject.next(this.viewContainer);
  }
}
