import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruitmentInfoComponent } from './recruitment-info.component';


const routes: Routes = [
  { path: 'recruitmentInfo', component: RecruitmentInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentInfoRoutingModule { }
