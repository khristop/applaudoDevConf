import { InjectionToken, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const DINAMIC_MENU = new InjectionToken<BehaviorSubject<ViewContainerRef>>('Dinamic menu token');
