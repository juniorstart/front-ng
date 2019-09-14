import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentInfoRoutingModule } from './recruitment-info-routing.module';
import { RecruitmentInfoComponent } from './recruitment-info.component';
import { MaterialModule } from 'projects/material/src/public-api';
import { RecruitmentInfoDetailsComponent } from './recruitment-info-details/recruitment-info-details.component';
import { RecruitmentInfoListComponent } from './recruitment-info-list/recruitment-info-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecruitmentInfoComponent, RecruitmentInfoDetailsComponent, RecruitmentInfoListComponent],
  imports: [
    CommonModule,
    RecruitmentInfoRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    RecruitmentInfoComponent
  ]
})
export class RecruitmentInfoModule { }
