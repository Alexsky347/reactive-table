import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  from,
  of,
  timeout,
} from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { HobbiesService } from 'src/app/core/services/hobbies.service';
import { ItHobby, ItHobbyCollection } from 'src/app/core/interface/it-hobby';
import { PageEvent } from '@angular/material/paginator';

export class TableDataSource extends DataSource<ItHobby> {
  private dataSubject = new BehaviorSubject<ItHobbyCollection>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  public dataCount = 0;

  constructor(private hobbiesService: HobbiesService) {
    super();
  }

  /**
   * @description Connect function called by the table to retrieve one stream containing the data to render.
   * @returns {Observable<ItDataTableCollection>}
   */
  connect = (): Observable<ItHobbyCollection> => {
    return this.dataSubject.asObservable();
  };

  /**
   * @description Disconnect function called by the table to clean up after itself.
   */
  disconnect = (): void => {
    this.dataSubject.complete();
    this.loadingSubject.complete();
  };

  /**
   * @description Load data from the server
   * @param id
   * @param filter
   * @param sortDirection
   * @param pageIndex
   * @param pageSize
   */
  loadHobbies = (
    id: number,
    filter = '',
    sortDirection = 'asc',
    pageIndex = 0,
    pageSize = 3,
    uri = '/hobbies'
  ) => {
    this.loadingSubject.next(true);
    this.hobbiesService
      .findHobbies(id, filter, sortDirection, pageIndex, pageSize, uri)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((hobbies) => {
        this.dataSubject.next(hobbies);
        this.dataCount = this.dataSubject.value.length;
      });
  };



  /**
   * @description Add an element to the data source
   * @param hobby
   */
  addElementToDataSource = <T>(hobby: T, uri: string): void => {
    this.hobbiesService
      .addHobbies(hobby, uri)
      .subscribe((hobby) =>{
          this.dataSubject.next([...this.dataSubject.value, hobby as ItHobby]);
          this.dataCount = this.dataSubject.value.length;
        }
      );
  };

  /**
   * @description Remove an element to the data source
   * @param hobby
   */
  removeElementToDataSource = <T>(id: string | number, uri: string): void => {
    this.hobbiesService.deleteHobbies(id, uri).subscribe(() => {
      this.dataSubject.next(this.dataSubject.value.filter((h) => h.id !== id));
      this.dataCount = this.dataSubject.value.length;
    });
  };

  /**
   * @description Edit an element to the data source
   * @param hobby
   */
  editElementToDataSource = <T>(hobby: T, uri: string): void => {
    this.hobbiesService.editHobbies(hobby, uri).subscribe((hobby) => {
      const dataFiltered = this.dataSubject.value.filter(
        //@ts-ignore
        (h) => h.id !== hobby.id
      );
      this.dataSubject.next([...dataFiltered, hobby as ItHobby]);
      this.dataCount = this.dataSubject.value.length;
    });
  };
}
