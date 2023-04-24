import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { ItHobby, ItHobbyCollection } from '../interface/it-hobby';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HobbiesService extends ApiService{

  constructor(
  ) {
    super();
   }

  /**
   *
   * @returns Observable<ItDataTable[]>
   */
  findHobbies(courseId:number, filter = '', sortOrder = 'asc',
  pageNumber = 0, pageSize = 10, uri: string) {

    return this.findAll<ItHobbyCollection>(uri, pageNumber, pageSize);
  }

  /**
   *
   * @returns Observable<ItDataTable[]>
   */
  addHobbies<T>(hobby: T, uri: string): Observable<T> {
    this.toast.success('Item added successfully');
    return this.create(hobby, uri);
  }

   /**
   *
   * @returns Observable<ItDataTable[]>
   */
   deleteHobbies(id: string|number, uri: string) {
    this.toast.warning('Item deleted successfully');
    return this.delete(id, uri);
  }

    /**
   *
   * @returns Observable<ItDataTable[]>
   */
    editHobbies<T>(hobby: T, uri: string): Observable<T> {
      this.toast.success('Item edited successfully');
      return this.edit(hobby, uri);
    }
}
