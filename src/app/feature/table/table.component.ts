import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { TableDataSource } from './service/table-data-source';
import { MatSort } from '@angular/material/sort';
import {  PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { HobbiesService } from 'src/app/core/services/hobbies.service';
import { ItHobby } from 'src/app/core/interface/it-hobby';
import { MatDialog } from '@angular/material/dialog';
import { UiDialogCreateComponent } from 'src/app/shared/ui/ui-dialog-create/ui-dialog-create.component';
import { UiModule } from 'src/app/shared/ui.module';
import { NgMainModule } from 'src/app/shared/ng-main.module';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [NgMainModule, UiModule],
})
export class TableComponent implements AfterViewInit, OnInit {
  data!: ItHobby;

  dataSource!: TableDataSource;

  URI = '/hobbies';

  paginatorEvent = new BehaviorSubject<PageEvent>({} as PageEvent);

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
      this.route.snapshot.data.data
    );
    this.data = this.route.snapshot.data.data ?? 0;
    this.dataSource = new TableDataSource(this.hobbiesService);
    this.dataSource.loadHobbies(1);
  }

  ngAfterViewInit() {
    this.paginatorEvent.pipe(tap((paginator) => this.loadDataPage(paginator.pageIndex, paginator.pageSize))).subscribe();
  }

  /**
   * @description Load data from the server
   *
   * @memberof TableComponent
   */
  loadDataPage(pageIndex?: number, pageSize?: number) {
    this.dataSource.loadHobbies(
      this.data.id,
      '',
      'asc',
      pageIndex ?? 0,
      pageSize ?? this.dataSource.offset,
      this.URI
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
    // @ts-ignore
    const id = obj.id;
    this.openDialog(obj).subscribe((result) => {
      if (result?.state && result?.data) {
        const nResult = { ...result.data };
        this.dataSource.editElementToDataSource(nResult, `${this.URI}/${id}`);
      }
      this.logger.debug(`Dialog result: ${result}`);
    });
  }

  /**
   * Handle pagination event
   * @param evt
   */
  paginate(evt: PageEvent) {
    this.paginatorEvent.next(evt);
  }
}
