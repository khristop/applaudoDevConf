import { Directive, InjectionToken, Injector, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appMenuContent]'
})
export class MenuContentDirective implements OnDestroy {
  private contentSubscription: Subscription;
  private lastContainer: ViewContainerRef;

  constructor(
    private templateRef: TemplateRef<any>,
    private injector: Injector,
  ) {}

  ngOnDestroy() {
    if (this.contentSubscription) {
      this.contentSubscription.unsubscribe();
    }

    if (this.lastContainer) {
      this.lastContainer.clear();
    }
  }

  @Input() set appMenuContent(containerToken: InjectionToken<BehaviorSubject<ViewContainerRef>>) {
    if (this.contentSubscription) {
      this.contentSubscription.unsubscribe();
    }

    this.contentSubscription = this.injector.get(containerToken).asObservable().subscribe(viewContainerRef =>  {
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
