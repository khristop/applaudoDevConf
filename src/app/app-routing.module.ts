import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstSectionComponent } from './first-section/first-section.component';
import { LayoutComponent } from './layout/layout.component';
import { SecondSectionComponent } from './second-section/second-section.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
      },
      {
        path: 'first',
        component: FirstSectionComponent
      },
      {
        path: 'second',
        component: SecondSectionComponent
      },
      {
        path: 'third',
        loadChildren: () => import('./lazy-section/lazy-section.module').then(m => m.LazySectionModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
