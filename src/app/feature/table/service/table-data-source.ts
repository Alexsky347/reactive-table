import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  forkJoin,
  from,
  of,
  timeout,
} from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { HobbiesService } from 'src/app/core/services/hobbies.service';
import { ItHobby, ItHobbyCollection } from 'src/app/core/interface/it-hobby';

export class TableDataSource extends DataSource<ItHobby> {
  private dataSubject = new BehaviorSubject<ItHobbyCollection>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  public dataCount = 0;

  public offset = 10;

  public displayedColumns! : string[];

  private actionName = 'actions';

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
    pageSize = this.offset,
    uri = '/hobbies'
  ) => {
    this.loadingSubject.next(true);

    const findHobbies$ = this.hobbiesService.findHobbies(
      id,
      filter,
      sortDirection,
      pageIndex,
      pageSize,
      uri
    );

    const countAll$ = this.hobbiesService.countAll(uri);

    forkJoin([findHobbies$, countAll$])
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(([hobbies, count]) => {
        this.dataSubject.next(hobbies);
        this.displayedColumns = [...Object.keys(hobbies[0]), this.actionName];
        if (Array.isArray(count) && count?.length) {
          this.dataCount = count.length;
        }
      });
  };

  /**
   * @description Add an element to the data source
   * @param hobby
   */
  addElementToDataSource = <T>(hobby: T, uri: string): void => {
    this.hobbiesService.addHobbies(hobby, uri).subscribe((hobby) => {
      this.dataSubject.next([...this.dataSubject.value, hobby as ItHobby]);
      this.dataCount ++;
    });
  };

  /**
   * @description Remove an element to the data source
   * @param hobby
   */
  removeElementToDataSource = <T>(id: string | number, uri: string): void => {
    this.hobbiesService.deleteHobbies(id, uri).subscribe(() => {
      this.dataSubject.next(this.dataSubject.value.filter((h) => h.id !== id));
      this.dataCount --;
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
    });
  };
}
