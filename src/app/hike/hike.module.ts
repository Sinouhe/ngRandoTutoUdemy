import { CommonModule } from '@angular/common';
import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailComponent } from './hike-details.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HikeFilterPipe } from './hike-filter.pipe';
import { HikeSummaryComponent } from './hike-summary.component';

@NgModule({
    imports: [CommonModule,RouterModule,FormsModule],
    declarations: [HikeListComponent, HikeDetailComponent, HikeFilterPipe, HikeSummaryComponent ],
    exports: [HikeListComponent],
    providers: [HikeService]
})
export class HikeModule {}