import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { inject } from '@angular/core';
import { TableDataSource } from './service/table-data-source';
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
import { UiBtnComponent } from 'src/app/shared/ui/ui-btn/ui-btn.component';
import { ItHobby } from 'src/app/core/interface/it-hobby';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UiDialogCreateComponent } from 'src/app/shared/ui/ui-dialog-create/ui-dialog-create.component';
import { MatIconModule } from '@angular/material/icon';
import { UiBtnIconComponent } from 'src/app/shared/ui/ui-btn-icon/ui-btn-icon.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CommonModule,
    // CdkTableModule,
    UiBtnComponent,
    MatDialogModule,
    MatIconModule,
    UiBtnIconComponent,
  ],
  // encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements AfterViewInit, OnInit {
  data!: ItHobby;
  dataSource!: TableDataSource;
  displayedColumns = ['id', 'name', 'weight', 'symbol', 'actions'];
  URI = '/hobbies';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route: ActivatedRoute,
    private logger: NGXLogger,
    private hobbiesService: HobbiesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.logger.trace(
      'this.route.snapshot.data["data"]',
      this.route.snapshot.data['data']
    );
    this.data = this.route.snapshot.data['data'] ?? 0;
    this.dataSource = new TableDataSource(this.hobbiesService);
    this.dataSource.loadHobbies(1);
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(tap(() => this.loadLessonsPage())).subscribe();
  }

  /**
   * @description Load data from the server
   *
   * @memberof TableComponent
   */
  loadLessonsPage() {
    this.dataSource.loadHobbies(
      this.data.id,
      '',
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

  /**
   *
   * @param obj
   * @returns
   */
  openDialog<T>(obj?: T) {
    return this.dialog
      .open(UiDialogCreateComponent, {
        data: { name: this.URI, obj },
      })
      .afterClosed();
  }

  /**
   *
   */
  addHobby() {
    this.openDialog().subscribe((result) => {
      if (result?.state && result?.data) {
        this.dataSource.addElementToDataSource(result.data, this.URI);
      }
      this.logger.debug(`Dialog result: ${result}`);
    });
  }

  /**
   *
   * @param id
   */
  deleteHobby(id: string | number) {
    this.dataSource.removeElementToDataSource(id, this.URI);
  }

/**
 *
 * @param obj
 */
  editHobby<T>(obj: T) {
    console.log(obj)
    // @ts-ignore
    const id = obj['id'];
    this.openDialog(obj).subscribe((result) => {
      if (result?.state && result?.data) {
        const nResult = {...result.data}
        this.dataSource.editElementToDataSource(nResult, `${this.URI}/${id}`);
      }
      this.logger.debug(`Dialog result: ${result}`);
    })
  }
}
