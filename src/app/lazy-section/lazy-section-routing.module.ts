import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdSectionComponent } from './third-section/third-section.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: ThirdSectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazySectionRoutingModule { }
