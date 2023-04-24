import { NgModule } from '@angular/core';
import { inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from 'src/app/core/services/api.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { LoggerService } from 'angular-auth-oidc-client/lib/logging/logger.service';
import { NGXLogger } from 'ngx-logger';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { HobbiesService } from 'src/app/core/services/hobbies.service';
import { ItHobby } from 'src/app/core/interface/it-hobby';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CommonModule,
    // CdkTableModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CommonModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class NgMainModule {}
