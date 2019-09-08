import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentInfoRoutingModule } from './recruitment-info-routing.module';
import { RecruitmentInfoComponent } from './recruitment-info.component';
import { MaterialModule } from 'projects/material/src/public-api';


@NgModule({
  declarations: [RecruitmentInfoComponent],
  imports: [
    CommonModule,
    RecruitmentInfoRoutingModule,
    MaterialModule
  ],
  exports:[
    RecruitmentInfoComponent
  ]
})
export class RecruitmentInfoModule { }
