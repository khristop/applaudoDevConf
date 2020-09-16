import { Directive, InjectionToken, Injector, Input, OnDestroy, Optional, Self, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Directive({
  selector: '[appMenuContainer]',
})
export class MenuContainerDirective implements OnDestroy {
  private containerSubscription: Subscription;
  private lastContainer: ViewContainerRef;

  constructor(
    @Optional() @Self() private templateRef: TemplateRef<unknown>,
    private injector: Injector,
  ) {}

  ngOnDestroy() {
    if (this.containerSubscription) {
      this.containerSubscription.unsubscribe();
    }

    if (this.lastContainer) {
      this.lastContainer.clear();
    }
  }

  @Input() set appMenuContainer(containerToken: InjectionToken<BehaviorSubject<ViewContainerRef>>) {
    if (this.containerSubscription) {
      this.containerSubscription.unsubscribe();
    }

    this.containerSubscription = this.injector.get(containerToken).asObservable().subscribe(viewContainerRef =>  {
      if (this.lastContainer) {
        this.lastContainer.clear();
      }
      this.lastContainer = viewContainerRef;
      if (viewContainerRef) {
        viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }
}
